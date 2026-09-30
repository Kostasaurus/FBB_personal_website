export default function Proteom() {
	return (
		<>
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
					<p className="text-gradient pb-3">Анализ протеома</p>
					<p>
                        <span className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 inline-block italic">
                            Geobacter metallireducens
                        </span>
					</p>
				</h2>
				<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>
			
			<section className="mb-12">
				<h3 className="section-header mb-6">Поиск и анализ протеома</h3>
				<div className="space-y-4">
					<p>
						<p>Для поиска по UniProt Proteomes необходим INSDC-идентификатор. Для его получения был произведён поиск на сайте NCBI по базе Datasets Genome (поиск по идентификатору RefSeq без версии, то есть <span className="font-mono">GCF_000012925</span>).</p>
						<p>В найденной сборке нужный идентификатор был указан в поле Submitted GenBank assembly. С полученным идентификатором был произведён поиск по UniProt Proteomes.</p><p>Запрос: <span className="font-mono">(genome_assembly:GCA_000012925.1)</span></p>
						<p>В результате был найден только один протеом — <span className="font-semibold">UP000007073</span> (<span className="italic text-primary-700 dark:text-glow-500">Geobacter metallireducens</span> (strain ATCC 53774 / DSM 7210 / GS-15)).</p>
						<p>Для нахождения референсного протеома для данного вида бактерии был произведён поисковой запрос <span className="font-mono">(taxonomy_id:312309) AND (proteome_type:1)</span>. В выдаче присутствует только один протеом, из предыдущего запроса.</p>
					</p>
					
					<h4 className="text-xl font-semibold mt-6 mb-3">Информация о протеоме</h4>
					<div className="space-y-2">
						<p><span className="font-semibold">NCBI Dataset:</span> <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_000012925.1/" target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 underline link-primary">GCF_000012925.1</a></p>
						<p><span className="font-semibold">INSDC:</span> GCA_000012925.1</p>
						<p><span className="font-semibold">RefSeq:</span> GCF_000012925.1</p>
						<p><span className="font-semibold">Proteome ID:</span> UP000007073</p>
						<p><span className="font-semibold">Статус:</span> Reference</p>
					</div>
					
					<div className="mt-6 space-y-3">
						<p><span className="font-semibold">Скачивание файла:</span> Файл был скачан с помощью <span className="font-mono">curl</span>:</p>
						<pre className="bg-gray-100 dark:bg-green-800/30 p-4 rounded-lg overflow-x-auto text-sm font-mono text-center">
                            curl 'https://rest.uniprot.org/uniprotkb/stream?compressed=true&format=txt&query=proteome:UP000007073' &gt; UP000007073.swiss.gz
                        </pre>
					</div>
				</div>
			</section>
			
			<section className="mb-12">
				<h3 className="section-header mb-6">Оценка числа белков, содержащих альфа-спирали</h3>
				<div className="space-y-4">
					<p>
						Для оценки частоты встречаемости альфа-спиральных участков были проанализированы ключи в поле FT (таблице локальных особенностей) записи UniProtKB, а именно проверялось наличие ключей: альфа-спирали — <span className="font-mono text-primary-700 dark:text-glow-500">HELIX</span>, и трансмембранных доменов — <span className="font-mono text-primary-700 dark:text-glow-500">TRANSMEM</span>. Скрипт парсит SwissProt-файл протеома. Подсчёт вёлся по каждой записи белка (разделитель <span className="font-mono text-primary-700 dark:text-glow-500">//</span>).
					</p>
					<div className="space-y-2">
						<p className="font-semibold">Результаты:</p>
						<p>Белки с ключом HELIX: <span className="text-primary-700 dark:text-glow-500 font-semibold">3</span></p>
						<p>Белки с ключом TRANSMEM: <span className="text-primary-700 dark:text-glow-500 font-semibold">633</span></p>
						<p>Оба ключа: <span className="text-primary-700 dark:text-glow-500 font-semibold">0</span></p>
						<p>Общее количество белков: <span className="text-primary-700 dark:text-glow-500 font-semibold">3502</span></p>
					</div>
					<p className="mt-4">
						Результаты и разницу в 211 раз можно объяснить тем, что ключ <span className="font-mono text-primary-700 dark:text-glow-500">HELIX</span> проставляется при наличии структуры, подтверждённой экспериментально, в то время как <span className="font-mono text-primary-700 dark:text-glow-500">TRANSMEM</span> проставляется автоматически на основе предсказаний и сравнения с известными структурами.
					</p>
				</div>
			</section>
			
			<section className="mb-12">
				<h3 className="section-header mb-6">Скрипт</h3>
				<div className="space-y-4">
                    <pre className="bg-gray-100 dark:bg-green-800/30 p-4 rounded-lg overflow-x-auto text-xs font-mono">
{`import gzip


proteom = gzip.open('UP000007073.swiss.gz', 'rt')

helix = transmembrane = proteins_count = combined = 0
local_helix = local_transmembrane = False

for line in proteom:
    if line.startswith('//'):

        if local_helix:
            helix += 1

        if local_transmembrane:
            transmembrane += 1

        if local_transmembrane and local_helix:
            combined += 1

        proteins_count += 1
        local_helix = local_transmembrane = False

    elif line.startswith('FT'):
        if 'HELIX' in line:
            local_helix = True
        if 'TRANSMEM' in line:
            local_transmembrane = True

proteom.close()

print(f"Helix: {helix}", f"Transmembrane: {transmembrane}", f"Together: {combined}", f"All: {proteins_count}", sep='\\n')`}
                    </pre>
					<p className="text-sm text-gray-600 dark:text-gray-400">
						Результат выполнения:
					</p>
					<pre className="bg-gray-100 dark:bg-green-800/30 p-4 rounded-lg overflow-x-auto text-sm font-mono">
<p>Helix: 3</p>
<p>Transmembrane: 633</p>
<p>Together: 0</p>
<p>All: 3502</p>
                    </pre>
				</div>
			</section>
			
			<section className="mb-12">
				<h3 className="section-header mb-6">Оценка количества ферментов в протеоме</h3>
				<div className="space-y-4">
					<p>
						Для оценки количества ферментов в протеоме были использованы поисковые запросы на сайте UniProt.
					</p>
					<p>
						Первый запрос находит все белки, которые имеют EC-код.
					</p>
					<p>
						🔍 <span className="font-mono">(proteome:UP000007073) AND (ec:*)</span> — получено <span className="font-semibold">778</span> белков.
					</p>
					<p>
						Второй запрос покрывает белки, для которых аннотирована определённая каталитическая реакция.
					</p>
					<p>
						🔍 <span className="font-mono">(proteome:UP000007073) AND (cc_catalytic_activity:*)</span> — <span className="font-semibold">729</span> белков.
					</p>
					<p>
						Значения довольно схожи, однако, как мне кажется, занижены, ведь, во-первых, большинство белков аннотированы автоматически, и многие белки с ферментативной активностью могут не иметь соответствующей записи. Во-вторых, исходя из поисковых запросов, доля ферментов в геноме бактерии всего 778 / 3502 = 22,2%, что довольно мало, особенно учитывая способности <span className="italic text-primary-700 dark:text-glow-500">Geobacter metallireducens</span> метаболизировать широчайший круг субстратов.
					</p>
				</div>
			</section>
		</>
	);
}