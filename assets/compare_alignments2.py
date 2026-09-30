#!/usr/bin/env python3

import argparse
import sys
from typing import List, Tuple, Dict, Set


def parse_fasta(fasta_text: str) -> List[str]:
    seqs = []
    current_seq = []
    for line in fasta_text.strip().splitlines():
        line = line.strip()
        if not line:
            continue
        if line.startswith('>'):
            if current_seq:
                seqs.append(''.join(current_seq))
                current_seq = []
        else:
            current_seq.append(line)
    if current_seq:
        seqs.append(''.join(current_seq))
    return seqs


def sort_alignment(aln: List[str]) -> List[str]:
    return sorted(aln, key=lambda seq: len(seq.replace('-', '')), reverse=True)


def retrieve_sequence(aln: List[str]) -> List[str]:
    return [seq.replace('-', '') for seq in aln]


def validate_alignments(aln1: List[str], aln2: List[str]) -> Tuple[int, int]:
    if retrieve_sequence(aln1) != retrieve_sequence(aln2):
        print("ОШИБКА: наборы последовательностей не совпадают.", file=sys.stderr)
        sys.exit(1)

    len1 = len(aln1[0])
    for seq in aln1:
        if len(seq) != len1:
            print(f"ОШИБКА: длина {len(seq)} вместо {len1}", file=sys.stderr)
            sys.exit(1)
    len2 = len(aln2[0])
    for seq in aln2:
        if len(seq) != len2:
            print(f"ОШИБКА: длина {len(seq)} вместо {len2}", file=sys.stderr)
            sys.exit(1)
    return len1, len2


def get_columns(aln: List[str]) -> List[Tuple[str, ...]]:
    n = len(aln)
    cols = []
    for i in range(len(aln[0])):
        cols.append(tuple(aln[k][i] for k in range(n)))
    return cols


def find_matches(aln1: List[str], aln2: List[str]) -> List[Tuple[int, int]]:
    cols1 = get_columns(aln1)
    cols2 = get_columns(aln2)

    L1, L2 = len(cols1), len(cols2)
    dp = [[0] * (L2 + 1) for _ in range(L1 + 1)]

    for i in range(1, L1 + 1):
        for j in range(1, L2 + 1):
            if cols1[i-1] == cols2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    matches = []
    i, j = L1, L2
    while i > 0 and j > 0:
        if cols1[i-1] == cols2[j-1]:
            matches.append((i, j))
            i -= 1
            j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            i -= 1
        else:
            j -= 1

    matches.reverse()
    return matches


def find_blocks(matches: List[Tuple[int, int]]) -> Tuple[List[Tuple[int, int, int, int]], Set[Tuple[int, int]]]:
    if not matches:
        return [], set()

    blocks = []
    used_in_blocks = set()
    idx = 0
    n = len(matches)

    while idx < n:
        start_i, start_j = matches[idx]
        block_pairs = [(start_i, start_j)]
        next_idx = idx + 1
        while next_idx < n:
            ni, nj = matches[next_idx]
            if ni == block_pairs[-1][0] + 1 and nj == block_pairs[-1][1] + 1:
                block_pairs.append((ni, nj))
                next_idx += 1
            else:
                break

        if len(block_pairs) >= 2:
            s1, e1 = block_pairs[0][0], block_pairs[-1][0]
            s2, e2 = block_pairs[0][1], block_pairs[-1][1]
            blocks.append((s1, e1, s2, e2))
            for pair in block_pairs:
                used_in_blocks.add(pair)

        idx = next_idx

    return blocks, used_in_blocks


def remove_overlapping_blocks(blocks_with_lengths: List[Tuple[Tuple[int, int, int, int], int]]) -> List[
    Tuple[int, int, int, int]]:

    if not blocks_with_lengths:
        return []

    sorted_blocks = sorted(blocks_with_lengths, key=lambda x: (x[0][0], x[0][2]))

    combined = [sorted_blocks[0][0]]

    for i in range(1, len(sorted_blocks)):
        current_block = sorted_blocks[i][0]
        last_block = combined[-1]


        overlap1 = last_block[1] >= current_block[0] - 1
        overlap2 = last_block[3] >= current_block[2] - 1

        if overlap1 and overlap2:
            new_block = (
                last_block[0],
                max(last_block[1], current_block[1]),
                last_block[2],
                max(last_block[3], current_block[3])
            )
            combined[-1] = new_block
        else:
            combined.append(current_block)

    return combined


def compare_alignments(aln1_fasta: str, aln2_fasta: str) -> Dict:
    aln1 = parse_fasta(aln1_fasta)
    aln2 = parse_fasta(aln2_fasta)
    if not aln1 or not aln2:
        raise ValueError("Одно из выравниваний пустое")

    aln1 = sort_alignment(aln1)
    aln2 = sort_alignment(aln2)

    len1, len2 = validate_alignments(aln1, aln2)

    matches = find_matches(aln1, aln2)

    blocks, used_in_blocks = find_blocks(matches)

    blocks_with_lengths = []
    for block in blocks:
        length = block[1] - block[0] + 1
        blocks_with_lengths.append((block, length))

    combined_blocks = remove_overlapping_blocks(blocks_with_lengths)

    used_in_blocks = set()
    for s1, e1, s2, e2 in combined_blocks:
        for i, j in matches:
            if s1 <= i <= e1 and s2 <= j <= e2:
                used_in_blocks.add((i, j))

    isolated = [pair for pair in matches if pair not in used_in_blocks]

    total = len(matches)
    pct1 = (total / len1 * 100) if len1 > 0 else 0.0
    pct2 = (total / len2 * 100) if len2 > 0 else 0.0

    return {
        'len1': len1,
        'len2': len2,
        'matches': matches,
        'blocks': combined_blocks,
        'isolated': isolated,
        'pct1': pct1,
        'pct2': pct2,
        'num_blocks': len(combined_blocks),
        'num_isolated': len(isolated),
    }

def main():
    parser = argparse.ArgumentParser(
        description='Сравнение двух выравниваний.'
    )
    parser.add_argument('aln1', help='Первое выравнивание (FASTA)')
    parser.add_argument('aln2', help='Второе выравнивание (FASTA)')
    parser.add_argument('-o', '--output', default='comparison.txt')
    args = parser.parse_args()

    with open(args.aln1, encoding='utf-8') as f1:
        fasta1 = f1.read()
    with open(args.aln2, encoding='utf-8') as f2:
        fasta2 = f2.read()

    result = compare_alignments(fasta1, fasta2)

    print(f"Длина выравнивания 1: {result['len1']}")
    print(f"Длина выравнивания 2: {result['len2']}")
    print(f"Одинаковых колонок: {len(result['matches'])}")
    print(f"% от длины 1: {result['pct1']:.2f}%")
    print(f"% от длины 2: {result['pct2']:.2f}%")
    print(f"Блоков: {result['num_blocks']}")
    print(f"Изолированных колонок: {result['num_isolated']}")

    sorted_blocks = sorted(result['blocks'], key=lambda b: b[1] - b[0] + 1, reverse=True)

    with open(args.output, 'w', encoding='utf-8') as out:
        out.write(f"Длина выравнивания 1: {result['len1']}\n")
        out.write(f"Длина выравнивания 2: {result['len2']}\n")
        out.write(f"Одинаковых колонок: {len(result['matches'])}\n")
        out.write(f"% от длины 1: {result['pct1']:.2f}%\n")
        out.write(f"% от длины 2: {result['pct2']:.2f}%\n")
        out.write(f"Блоков: {result['num_blocks']}\n")
        out.write(f"Изолированных колонок: {result['num_isolated']}\n")

        out.write("\nБлоки:\n")
        for s1, e1, s2, e2 in sorted_blocks:
            length = e1 - s1 + 1
            out.write(f"({s1},{e1}) = ({s2},{e2})  (длина {length})\n")
        out.write("\nИзолированные колонки:\n")
        for i, j in result['isolated']:
            out.write(f"({i}, {j})\n")

if __name__ == "__main__":
    main()