#!/usr/bin/env python3
"""
compare_aln.py вЂ” СЃСЂР°РІРЅРµРЅРёРµ РґРІСѓС… РјРЅРѕР¶РµСЃС‚РІРµРЅРЅС‹С… РІС‹СЂР°РІРЅРёРІР°РЅРёР№ (Р°РЅР°Р»РѕРі VerAlign)

РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ:
    python3 compare_aln.py aln1.fasta aln2.fasta [label1] [label2]

Р’С…РѕРґРЅС‹Рµ РґР°РЅРЅС‹Рµ:
    Р”РІР° FASTA С„Р°Р№Р»Р° СЃ РІС‹СЂР°РІРЅРёРІР°РЅРёСЏРјРё РѕРґРЅРёС… Рё С‚РµС… Р¶Рµ РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚РµР№.
    Р—Р°РіРѕР»РѕРІРєРё РІРёРґР° >sp|ACC|ID_SPECIES ..., >PDB:1x03:A ... РёР»Рё >1x03_A_... .
    Р”Р»РёРЅС‹ РІС‹СЂР°РІРЅРµРЅРЅС‹С… РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚РµР№ РІ РєР°Р¶РґРѕРј С„Р°Р№Р»Рµ РґРѕР»Р¶РЅС‹ СЃРѕРІРїР°РґР°С‚СЊ.

Р’С‹С…РѕРґРЅС‹Рµ РґР°РЅРЅС‹Рµ (stdout):
    - Р”Р»РёРЅС‹ РІС‹СЂР°РІРЅРёРІР°РЅРёР№
    - Р§РёСЃР»Рѕ Рё % СЃРѕРІРїР°РґР°СЋС‰РёС… РєРѕР»РѕРЅРѕРє
    - РЎРїРёСЃРѕРє Р±Р»РѕРєРѕРІ (s1,f1)=(s2,f2) СЃ РґР»РёРЅРѕР№ >= 2
    - РћРґРёРЅРѕС‡РЅС‹Рµ СЃРѕРІРїР°РґР°СЋС‰РёРµ РєРѕР»РѕРЅРєРё РІРЅРµ Р±Р»РѕРєРѕРІ
    - РќРµСЃРѕРІРїР°РґР°СЋС‰РёРµ СѓС‡Р°СЃС‚РєРё РІ РїРµСЂРІРѕРј РІС‹СЂР°РІРЅРёРІР°РЅРёРё
"""

import sys


def parse_fasta(filepath):
    """
    Р§РёС‚Р°РµС‚ FASTA С„Р°Р№Р» СЃ РІС‹СЂР°РІРЅРёРІР°РЅРёРµРј.
    Р’РѕР·РІСЂР°С‰Р°РµС‚ dict {short_id: gapped_sequence}.
    РџРѕРґРґРµСЂР¶РёРІР°РµС‚ С„РѕСЂРјР°С‚С‹ Р·Р°РіРѕР»РѕРІРєРѕРІ:
      - UniProt: >sp|ACC|ID_SPECIES ... -> ID
      - PDBeFold: >PDB:1x03:A ...      -> 1x03
      - MUSCLE:   >1x03_A_Name ...     -> 1x03
    """
    seqs = {}
    current = None
    with open(filepath) as f:
        for line in f:
            line = line.rstrip()
            if line.startswith('>'):
                header = line[1:].split()[0]
                parts = line[1:].split('|')
                if len(parts) >= 3:
                    # UniProt: sp|ACC|ID_SPECIES
                    current = parts[2].split()[0]
                elif header.startswith('PDB:'):
                    # PDBeFold: PDB:1x03:A
                    current = header.split(':')[1].lower()
                else:
                    # MUSCLE/РґСЂСѓРіРёРµ: 1x03_A_Name -> Р±РµСЂС‘Рј РґРѕ РїРµСЂРІРѕРіРѕ _
                    current = header.split('_')[0].lower()
                seqs[current] = ''
            elif current:
                seqs[current] += line.replace(' ', '')
    return seqs


def compare_alignments(aln1, aln2, label1='Aln1', label2='Aln2'):
    """
    РЎСЂР°РІРЅРёРІР°РµС‚ РґРІР° РІС‹СЂР°РІРЅРёРІР°РЅРёСЏ РѕРґРЅРёС… Рё С‚РµС… Р¶Рµ РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚РµР№.

    РђР»РіРѕСЂРёС‚Рј:
      Р”Р»СЏ РєР°Р¶РґРѕР№ РєРѕР»РѕРЅРєРё c1 РІ aln1 РЅР°С…РѕРґРёРј РѕСЃС‚Р°С‚РєРё РІСЃРµС… РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚РµР№.
      РЎРјРѕС‚СЂРёРј, РІ РєР°РєСѓСЋ РєРѕР»РѕРЅРєСѓ c2 РІ aln2 РїРѕРїР°РґР°СЋС‚ С‚Рµ Р¶Рµ РѕСЃС‚Р°С‚РєРё.
      Р•СЃР»Рё РґР»СЏ РІСЃРµС… РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚РµР№ СЌС‚Рѕ РѕРґРЅР° Рё С‚Р° Р¶Рµ РєРѕР»РѕРЅРєР° c2 вЂ”
      РїР°СЂР° (c1, c2) СЃС‡РёС‚Р°РµС‚СЃСЏ СЃРѕРІРїР°РґР°СЋС‰РµР№.

    Р’РѕР·РІСЂР°С‰Р°РµС‚: (blocks, singles, matching)
      blocks  вЂ” СЃРїРёСЃРѕРє (s1, f1, s2, f2, length) Р±Р»РѕРєРѕРІ РґР»РёРЅРѕР№ >= 2
      singles вЂ” СЃРїРёСЃРѕРє (c1, c2) РѕРґРёРЅРѕС‡РЅС‹С… СЃРѕРІРїР°РґРµРЅРёР№ РІРЅРµ Р±Р»РѕРєРѕРІ
      matching вЂ” РїРѕР»РЅС‹Р№ СЃРїРёСЃРѕРє СЃРѕРІРїР°РґР°СЋС‰РёС… РїР°СЂ (c1, c2), 1-based
    """
    seqs = sorted(set(aln1.keys()) & set(aln2.keys()))
    if not seqs:
        print('РћРЁРР‘РљРђ: РЅРµС‚ РѕР±С‰РёС… РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚РµР№ РјРµР¶РґСѓ С„Р°Р№Р»Р°РјРё.')
        print(f'  {label1}: {sorted(aln1.keys())}')
        print(f'  {label2}: {sorted(aln2.keys())}')
        return [], [], []

    ncols1 = len(list(aln1.values())[0])
    ncols2 = len(list(aln2.values())[0])

    # РѕСЃС‚Р°С‚РѕРє -> РєРѕР»РѕРЅРєР° РІ aln2
    res_to_col2 = {}
    for s in seqs:
        res_to_col2[s] = {}
        ri = 0
        for col, aa in enumerate(aln2[s]):
            if aa != '-':
                res_to_col2[s][ri] = col
                ri += 1

    # РєРѕР»РѕРЅРєР° -> РёРЅРґРµРєСЃ РѕСЃС‚Р°С‚РєР° РІ aln1
    col_to_res1 = {}
    for s in seqs:
        col_to_res1[s] = []
        ri = 0
        for aa in aln1[s]:
            col_to_res1[s].append(None if aa == '-' else ri)
            if aa != '-':
                ri += 1

    # РєРѕР»РѕРЅРєР° -> РёРЅРґРµРєСЃ РѕСЃС‚Р°С‚РєР° РІ aln2
    col_to_res2 = {}
    for s in seqs:
        col_to_res2[s] = []
        ri = 0
        for aa in aln2[s]:
            col_to_res2[s].append(None if aa == '-' else ri)
            if aa != '-':
                ri += 1

    # РџРѕРёСЃРє СЃРѕРІРїР°РґР°СЋС‰РёС… РїР°СЂ РєРѕР»РѕРЅРѕРє
    matching = []
    for c1 in range(ncols1):
        assignments = {s: col_to_res1[s][c1] for s in seqs
                       if col_to_res1[s][c1] is not None}
        if not assignments:
            continue
        c2_candidates = set()
        for s, ri in assignments.items():
            c2_candidates.add(res_to_col2[s].get(ri, None))
        if len(c2_candidates) != 1 or None in c2_candidates:
            continue
        c2 = list(c2_candidates)[0]
        # РїСЂРѕРІРµСЂРєР° РІ РѕР±СЂР°С‚РЅСѓСЋ СЃС‚РѕСЂРѕРЅСѓ
        assignments2 = {s: col_to_res2[s][c2] for s in seqs
                        if col_to_res2[s][c2] is not None}
        if assignments2 == assignments:
            matching.append((c1 + 1, c2 + 1))

    # Р‘Р»РѕРєРё consecutive СЃРѕРІРїР°РґРµРЅРёР№
    blocks = []
    if matching:
        bs1, bs2 = matching[0]
        ps1, ps2 = matching[0]
        for c1, c2 in matching[1:]:
            if c1 == ps1 + 1 and c2 == ps2 + 1:
                ps1, ps2 = c1, c2
            else:
                if ps1 - bs1 + 1 >= 2:
                    blocks.append((bs1, ps1, bs2, ps2, ps1 - bs1 + 1))
                bs1, bs2, ps1, ps2 = c1, c2, c1, c2
        if ps1 - bs1 + 1 >= 2:
            blocks.append((bs1, ps1, bs2, ps2, ps1 - bs1 + 1))

    in_block = set()
    for b in blocks:
        for i in range(b[0], b[1] + 1):
            in_block.add(i)
    singles = [(c1, c2) for c1, c2 in matching if c1 not in in_block]

    # в”Ђв”Ђ Р’С‹РІРѕРґ в”Ђв”Ђ
    print(f"\n{'='*60}")
    print(f"РЎСЂР°РІРЅРµРЅРёРµ: {label1} vs {label2}")
    print(f"РћР±С‰РёРµ РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚Рё ({len(seqs)}): {', '.join(seqs)}")
    print(f"Р”Р»РёРЅР° {label1}: {ncols1}  |  Р”Р»РёРЅР° {label2}: {ncols2}")
    print(f"РЎРѕРІРїР°РґР°СЋС‰РёС… РєРѕР»РѕРЅРѕРє: {len(matching)}")
    print(f"  % РѕС‚ {label1}: {100*len(matching)/ncols1:.1f}%")
    print(f"  % РѕС‚ {label2}: {100*len(matching)/ncols2:.1f}%")

    print(f"\nР‘Р»РѕРєРё (РґР»РёРЅР° >= 2), РїРѕ СѓР±С‹РІР°РЅРёСЋ РґР»РёРЅС‹:")
    if blocks:
        print(f"  {'(s1,f1)':>14} = {'(s2,f2)':>14}  РґР»РёРЅР°")
        for b in sorted(blocks, key=lambda x: -x[4]):
            print(f"  ({b[0]},{b[1]}) = ({b[2]},{b[3]})  {b[4]}")
    else:
        print("  Р±Р»РѕРєРѕРІ РЅРµС‚")

    print(f"\nР’СЃРµРіРѕ Р±Р»РѕРєРѕРІ: {len(blocks)}")
    print(f"РћРґРёРЅРѕС‡РЅС‹С… СЃРѕРІРїР°РґРµРЅРёР№ РІРЅРµ Р±Р»РѕРєРѕРІ: {len(singles)}")
    if singles:
        print("  " + ", ".join(f"({c1},{c2})" for c1, c2 in singles))

    blocks_sorted = sorted(blocks, key=lambda x: x[0])
    print(f"\nРќРµСЃРѕРІРїР°РґР°СЋС‰РёРµ СѓС‡Р°СЃС‚РєРё РІ {label1}:")
    prev = 0
    for b in blocks_sorted:
        if b[0] > prev + 1:
            print(f"  {prev+1}-{b[0]-1} (РґР»РёРЅР° {b[0]-1-prev})")
        prev = b[1]
    if prev < ncols1:
        print(f"  {prev+1}-{ncols1} (РґР»РёРЅР° {ncols1-prev})")

    return blocks, singles, matching


if __name__ == '__main__':
    if len(sys.argv) >= 3:
        path1, path2 = sys.argv[1], sys.argv[2]
        lab1 = sys.argv[3] if len(sys.argv) > 3 else path1
        lab2 = sys.argv[4] if len(sys.argv) > 4 else path2
        A = parse_fasta(path1)
        B = parse_fasta(path2)
        compare_alignments(A, B, label1=lab1, label2=lab2)
    else:
        #Р±РµР· Р°СЂРіСѓРјРµРЅС‚РѕРІ Р±РµСЂРµС‚ СЃР»РµРґСѓСЋС‰РёРµ Р·РЅР°РЅС‡РµРЅРёСЏ:
        A = parse_fasta('prakt-D-A-muscle.fasta')
        B = parse_fasta('prakt-D-B-mafft.fasta')
        C = parse_fasta('prakt-D-C-tcoffee.fasta')
        compare_alignments(A, B, label1='A(MUSCLE)', label2='B(MAFFT)')
        compare_alignments(A, C, label1='A(MUSCLE)', label2='C(T-Coffee)')