import muscleVSmafft from '../../../assets/muscleVSmafft.txt'
import muscleVStcoffee from '../../../assets/muscleVStcoffee.txt'
import python_script from '../../../assets/compare_alignments2.py'
import muscle from '../../../assets/MUSCLE.fasta'
import tcoffee from '../../../assets/TCOFFEE.fasta'
import mafft from '../../../assets/MAFFT.fasta'
import msa_jalview from '../../../assets/pr12_part1_MSA.jvp'
import muscle_3d from '../../../assets/part3_MUSCLE.fasta'
import pdbe from '../../../assets/PDBe-alignment.fasta'
import jalview_3d from '../../../assets/pr12_3D.jvp'
import image from '../../../assets/pr12_img.png'

const linkClass = 'text-primary-600 dark:text-primary-400 underline link-primary'

const blockRowClass =
	'border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight'

const tableWrapClass =
	'rounded-2xl border mt-6 border-mystic-200 shadow-btn-primary dark:border-mystic-700 overflow-hidden w-full max-w-xl md:max-w-[50%] mx-auto'

function BlockTable ({ rows }) {
	return (
		<div className={tableWrapClass}>
			<div className="overflow-x-auto">
				<table className="w-full border-x-0">
					<thead className="bg-gray-50 p-6 rounded-2xl dark:bg-forest-button">
						<tr>
							<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
								(s1, f1) = (s2, f2)
							</th>
							<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold">
								Длина (f1–s1+1)
							</th>
						</tr>
					</thead>
					<tbody>
						{rows.map(([coords, length]) => (
							<tr key={coords} className={blockRowClass}>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									{coords}
								</td>
								<td className="text-center p-2 md:p-4">{length}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

function MismatchList ({items }) {
	return (
		<>
			<ul className="list-none space-y-1 mb-4 pl-0">
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	)
}

function AlignmentStats ({ items }) {
	return (
		<div className="space-y-1 mb-4 mt-4">
			{items.map(([label, value]) => (
				<p key={label} className="mb-1">
					<span className="font-semibold">{label}</span> {value}
				</p>
			))}
		</div>
	)
}

export default function Pr12 () {
	const muscleVsTcoffeeBlocks = [
		['(1287,1438) = (1333,1484)', '152'],
		['(474,598) = (487,611)', '125'],
		['(1237,1284) = (1283,1330)', '48'],
		['(654,690) = (667,703)', '37'],
		['(739,775) = (752,788)', '37'],
		['(1196,1230) = (1242,1276)', '35'],
		['(433,466) = (446,479)', '34'],
		['(694,726) = (707,739)', '33'],
	]

	const muscleVsMafftBlocks = [
		['(433,616) = (443,626)', '184'],
		['(1197,1284) = (1248,1335)', '88'],
		['(652,736) = (665,749)', '85'],
		['(1287,1368) = (1338,1419)', '82'],
		['(1374,1439) = (1425,1490)', '66'],
		['(1030,1084) = (1079,1133)', '55'],
		['(1095,1149) = (1144,1198)', '55'],
	]

	const spatialBlocks = [
		['(166,197) = (166,197)', '32'],
		['(140,162) = (140,162)', '23'],
		['(99,117) = (98,116)', '19'],
		['(80,95) = (79,94)', '16'],
		['(121,135) = (120,134)', '15'],
		['(210,216) = (212,218)', '7'],
		['(205,207) = (206,208)', '3'],
		['(223,224) = (226,227)', '2'],
	]

	return (
		<>
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
					<p className="text-primary-500 dark:text-glow-500 pb-3">Практикум 12</p>
				</h2>
				<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>

			<section className="mb-12">
				<h3 className="section-header mb-6">Сравнение множественных выравниваний</h3>

				<div className="mb-6 space-y-2">
					<p>
						Для задания была выбрана доменная архитектура nidG2 (nidogen G2 domain), напоминающая
						структуру бочонка GFP.
					</p>
					<p>
						Построение выравнивания было выполнено для последовательности белка базальных мембран
						нидогена-1 (Nidogen-1) из 7 различных организмов.
					</p>
					<p>
						Выравнивания были получены с помощью сервисов Jalview, программы — MUSCLE, MAFFT и
						TCOFFEE, все с параметрами по умолчанию.
					</p>
					<p>Сравнивались MUSCLE (A) с TCOFFEE (B) и MUSCLE с MAFFT (C).</p>
					<p>
						Для сравнения мной был написан{' '}
						<a href={python_script} download="compare_alignments.py" className={linkClass}>
							скрипт на Python
						</a>
						, ищущий совпадающие колонки в двух выравниваниях и объединяющий соседние совпадения в
						блоки.
					</p>
				</div>

				<p className="mb-2">
					<span className="font-semibold">Выравнивания:</span>{' '}
					<a href={muscle} target='_blank' className={linkClass}>
						MUSCLE.fasta
					</a>
					{', '}
					<a href={tcoffee} target='_blank' className={linkClass}>
						TCOFFEE.fasta
					</a>
					{', '}
					<a href={mafft} target='_blank' className={linkClass}>
						MAFFT.fasta
					</a>
					{', '}
					<a href={msa_jalview} download="pr12_part1_MSA.jvp" className={linkClass}>
						Проект Jalview
					</a>
				</p>

				<p className="mt-4 mb-6">Далее приведены результаты двух сравнений.</p>

				<h4 className="text-xl font-semibold mb-3">
					MUSCLE <span className="text-primary-500 dark:text-glow-500 text-2xl">VS</span> TCOFFEE
				</h4>
				<a
					href={muscleVStcoffee}
					target='_blank'
					className={`${linkClass} mb-2 inline-block`}
				>
					Полный вывод программы
				</a>

				<AlignmentStats
					items={[
						['Длина выравнивания 1:', '1530'],
						['Длина выравнивания 2:', '1573'],
						['Одинаковых колонок:', '952'],
						['% от длины A:', '62.22%'],
						['% от длины B:', '60.52%'],
						['Блоков:', '53'],
						['Изолированных колонок:', '44'],
					]}
				/>

				<p className="font-semibold mb-2">Самые крупные блоки:</p>
				<BlockTable rows={muscleVsTcoffeeBlocks} />

				<p className="mt-6 mb-2">
					<span className="font-semibold">Одиночные совпадающие колонки:</span>{' '}
					<span className="font-mono">
						(20, 17), (24, 28), (28, 29), (200, 206), (205, 211)...
					</span>
				</p>

				<p className="font-semibold mt-6 mb-2">Крупнейшие несовпадающие участки (в выравнивании A):</p>
				<MismatchList
					items={[
						'851–947 (97 колонок)',
						'978–1057 (80 колонок)',
						'1140–1181 (42 колонки)',
						'958–971 (14 колонок)',
						'1527–1530 (4 колонки)',
					]}
				/>

				<h4 className="text-xl font-semibold mb-3 mt-10">
					MUSCLE <span className="text-primary-500 dark:text-glow-500 text-2xl">VS</span> MAFFT
				</h4>
				<a
					href={muscleVSmafft}
					target='_blank'
					className={`${linkClass} mb-2 inline-block`}
				>
					Полный вывод программы
				</a>

				<AlignmentStats
					items={[
						['Длина выравнивания 1:', '1530'],
						['Длина выравнивания 2:', '1581'],
						['Одинаковых колонок:', '1127'],
						['% от длины A:', '73.66%'],
						['% от длины C:', '71.28%'],
						['Блоков:', '48'],
						['Изолированных колонок:', '26'],
					]}
				/>

				<p className="font-semibold mb-2">Самые крупные блоки:</p>
				<BlockTable rows={muscleVsMafftBlocks} />

				<p className="mt-6 mb-2">
					<span className="font-semibold">Одиночные совпадающие колонки:</span>{' '}
					<span className="font-mono">
						(20, 21), (24, 32), (28, 33), (232, 237), (234, 239)...
					</span>
				</p>

				<p className="font-semibold mt-6 mb-2">Крупнейшие несовпадающие участки (в выравнивании A):</p>
				<MismatchList
					items={[
						'851–934 (84 колонки)',
						'887–946 (60 колонок)',
						'619–624 (6 колонок)',
						'117–123 (7 колонок)',
						'287–314 (28 колонок)',
						'345–363 (19 колонок)',
						'838–846 (9 колонок)',
						'237–240 (4 колонки)',
						'179–181 (3 колонки)',
						'1172–1186 (15 колонок)',
					]}
				/>
				

				<h4 className="text-xl font-semibold mb-3 mt-10">Обсуждение</h4>
				<p className="space-y-2">
					MUSCLE ближе к MAFFT, чем к TCOFFEE (73.66% совпадений в первом случае и 62.22% во втором, в
					A/C меньше блоков, чем в A/B (48 / 53) и одиночных колонок (26 / 44), но блоки в A/C более
					протяжённые.
				</p>
			</section>

			<section className="mb-12">
				<h3 className="section-header mb-6">Пространственное выравнивание</h3>

				<div className="mb-6 space-y-2">
					<p>
						Для задания были выбраны 3 белка, содержащие анкириновые повторы (семейство PF00023), а
						именно:
					</p>
					<p>
						<span className="text-primary-500 dark:text-glow-500">1ap7</span> (P19-INK4D) из <span className="italic">Mus musculus</span>, <span className="text-primary-500 dark:text-glow-500">1ixv</span> (homolog of
						oncoprotein gankyrin) из <span className="italic">Saccharomyces cerevisiae</span>, <span className="text-primary-500 dark:text-glow-500">1qym</span>
						(gankyrin) из <span className="italic">Homo sapiens</span>.
					</p>
				</div>

				<p className="mb-4">
					<span className="font-semibold">Выравнивания:</span>{' '}
					<a href={muscle_3d} target='_blank' className={linkClass}>
						MUSCLE.fasta
					</a>
					{', '}
					<a href={pdbe} target='_blank' className={linkClass}>
						PDBeFold.fasta
					</a>
					{', '}
					<a href={jalview_3d} download="pr12_3D.jvp" className={linkClass}>
						Проект Jalview
					</a>
				</p>

				<AlignmentStats
					items={[
						['Длина выравнивания 1:', '238'],
						['Длина выравнивания 2:', '239'],
						['Одинаковых колонок:', '118'],
						['% от длины 1:', '49.58%'],
						['% от длины 2:', '49.37%'],
						['Блоков:', '8'],
						['Изолированных колонок:', '1'],
					]}
				/>

				<p className="font-semibold mb-2">Блоки:</p>
				<BlockTable rows={spatialBlocks} />

				<p className="mt-6 mb-2">
					<span className="font-semibold">Изолированные колонки:</span>{' '}
					<span className="font-mono">(16, 76)</span>
				</p>

				<p className="font-semibold mt-6 mb-2">Несовпадающие участки (в MSA):</p>
				<MismatchList
					title="В выравнивании 1:"
					items={[
						'1–79 (79 колонок)',
						'118–120 (3 колонки)',
						'136–139 (4 колонки)',
						'163–165 (3 колонки)',
						'198–204 (7 колонок)',
						'208–209 (2 колонки)',
						'217–222 (6 колонок)',
						'225–238 (14 колонок)',
					]}
				/>

				<div className="mt-8 space-y-3">
					<p>
						<span className="font-semibold">Общая схожесть:</span> 49.5% одинаково выровненных колонок
						— это умеренное сходство, что ожидаемо при сравнении MSA и структурного выравнивания.
					</p>
					<p>
						<span className="font-semibold">Основное различие — N-конец (позиции 1–79):</span> Этот
						участок полностью по-разному выровнен двумя методами. MUSCLE, работая только с
						последовательностями, не смог корректно совместить эту область, в то время как
						структурное выравнивание использовало информацию о пространственном расположении. Вероятно,
						это гибкая петля или неструктурированный участок, который трудно выровнять без
						3D-информации.
					</p>
					<p>
						<span className="font-semibold">Высокая консервативность ядра (позиции 80–238):</span>{' '}
						После N-конца оба метода дают очень похожие результаты — большинство блоков совпадает или
						сдвинуто всего на 1 позицию. Это указывает на то, что структурное ядро домена хорошо
						выравнивается даже без структурных данных.
					</p>
					<p>
						<span className="font-semibold">Заключение:</span> Структурное выравнивание превосходит
						MUSCLE в областях низкой консервативности последовательности (N-конец), но в
						структурно-консервативном ядре оба метода дают сходные результаты. Это демонстрирует, что
						MSA достаточно надёжен для выравнивания консервативных доменов, но может ошибаться в
						вариабельных участках, где только структурная информация позволяет правильно определить
						гомологию.
					</p>
				</div>

				<div className="flex flex-col items-center mt-10 w-full max-w-xl md:max-w-[50%] mx-auto">
					<img
						src={image}
						alt="Рис.1 Совмещение структур"
						className="rounded-xl w-full h-auto"
					/>
					<p className="text-center mt-3 font-semibold">Рис.1 Совмещение структур</p>
					<p className="text-center mt-1">
						<span className="text-cyan-500">Циан.</span> - 1ap7, <span className="text-green-500">Зел.</span> - 1ixv, <span className="text-pink-500">Роз.</span> - 1qym
					</p>
				</div>
			</section>
			
			<section className="mb-12">
				<h3 className="section-header mb-6">Описание одной из программ множественного выравнивания (<span className="text-primary-600 dark:text-glow-500">MUSCLE</span>)</h3>
				<div className="space-y-4">
					<p>Мной была выбрана программа <span className="text-primary-600 dark:text-glow-500">MUSCLE</span>, так как она использовалась в наших работах чаще всего, а также у этой программы самое крутое название)</p>
					<p>
						<span className="text-primary-600 dark:text-glow-500">MUSCLE</span> (
						<span className="text-primary-600 dark:text-glow-500">M</span>ultiple
						<span className="text-primary-600 dark:text-glow-500"> S</span>equence
						<span className="text-primary-600 dark:text-glow-500"> C</span>omparison by
						<span className="text-primary-600 dark:text-glow-500"> L</span>og-
						<span className="text-primary-600 dark:text-glow-500">E</span>xpectation) — это программа для множественного выравнивания аминокислотных (белковых) и нуклеотидных (ДНК/РНК) последовательностей. Она была создана Робертом Эдгаром (Robert C. Edgar) и впервые опубликована в 2004 году. [1]
					</p>
					<p>Алгоритм <span className="text-primary-600 dark:text-glow-500">MUSCLE</span> состоит из трёх основных этапов, которые последовательно улучшают качество выравнивания:</p>
					<ul className="list-disc pl-6 space-y-3">
						<li>
							<span className="font-semibold">Этап 1: Черновое прогрессивное выравнивание (Draft Progressive):</span> На этом этапе главный приоритет — скорость. Сначала для всех пар последовательностей вычисляется приблизительная мера сходства на основе k-меров (коротких слов) для построения матрицы расстояний. Затем с помощью метода UPGMA строится направляющее дерево, и на его основе создаётся первое, «черновое» множественное выравнивание.
						</li>
						<li>
							<span className="font-semibold">Этап 2: Улучшенное прогрессивное выравнивание (Improved Progressive):</span> На этом этапе точность повышается. Используя выравнивание, полученное на первом этапе, программа пересчитывает матрицу расстояний, но уже с использованием более точной меры Кимуры. Затем строится новое, более точное дерево, и прогрессивное выравнивание выполняется заново.
						</li>
						<li>
							<span className="font-semibold">Этап 3: Финализация (Refinement):</span> На заключительном этапе алгоритм итеративно пытается улучшить отдельные участки выравнивания. Он поочерёдно удаляет рёбра из дерева, делит выравнивание на две части, а затем выравнивает их заново. Если новая конфигурация улучшает общую оценку (SP-score), она сохраняется. [1][2]
						</li>
					</ul>
					<p>Основными преимуществами <span className="text-primary-600 dark:text-glow-500">MUSCLE</span> являются относительно высокие точность и скорость. Если сравнивать с другими программами множественного выравнивания, <span className="text-primary-600 dark:text-glow-500">MUSCLE</span> очень похож на MAFFT: обе они являются итеративными, дают схожие результаты и производительность. В сравнении с MSA, использующими прогрессивный алгоритм, например, T-COFFEE или Clustal, <span className="text-primary-600 dark:text-glow-500">MUSCLE</span> может уступать в точности, однако является значительно более производительным, особенно на больших объёмах данных. [3][4]</p>
					<div className="text-sm text-gray-600 dark:text-gray-400 mt-6 space-y-1">
						<p className="font-semibold text-base text-gray-800 dark:text-gray-200 mt-6 mb-2">Список литературы</p>
						<p>[1] Edgar RC. MUSCLE: multiple sequence alignment with high accuracy and high throughput. Nucleic Acids Res. 2004 Mar 19;32(5):1792-7. doi: 10.1093/nar/gkh340. PMID: 15034147; PMCID: PMC390337.</p>
						<p>[2] Edgar RC. MUSCLE: a multiple sequence alignment method with reduced time and space complexity. BMC Bioinformatics. 2004 Aug 19;5:113. doi: 10.1186/1471-2105-5-113. PMID: 15318951; PMCID: PMC517706.</p>
						<p>[3] Zhang C, Wang Q, Li Y, Teng A, Hu G, Wuyun Q, Zheng W. The Historical Evolution and Significance of Multiple Sequence Alignment in Molecular Structure and Function Prediction. Biomolecules. 2024 Nov 29;14(12):1531. doi: 10.3390/biom14121531. PMID: 39766238; PMCID: PMC11673352.</p>
						<p>[4] Pais FS, Ruy PC, Oliveira G, Coimbra RS. Assessing the efficiency of multiple sequence alignment programs. Algorithms Mol Biol. 2014 Mar 6;9(1):4. doi: 10.1186/1748-7188-9-4. PMID: 24602402; PMCID: PMC4015676.</p>
					</div>
				</div>
			</section>		</>
	)
}
