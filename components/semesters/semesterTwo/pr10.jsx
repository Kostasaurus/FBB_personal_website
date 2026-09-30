import pr10Part1Alignment from '../../../assets/pr10_part1_alignment.txt'
import pr10_1_jal from '../../../assets/pr10_1_jal.jvp'
import polSegmentFasta from '../../../assets/POL_segment_FIVPE.fasta'
import pr10_2Alignment from '../../../assets/pr10-2-Alignment.txt'
import pr10_2_jal from '../../../assets/pr10_2_jal.jvp'
import pr10_3Alignment from '../../../assets/pr10-3-Alignment.txt'

export default function Pr10 () {
	return (
		<>
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
					<p className="text-primary-500 dark:text-glow-500 pb-3">Практикум 10</p>
				</h2>
				<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>
			
			<section className="mb-12">
				<h3 className="section-header mb-6">Часть 1. Гомологи mercuric reductase</h3>
				
				<div className="mb-6 space-y-2">
					<p>Поиск гомологичных последовательностей был осуществлён с помощью инструмента BLAST (blastp) на сайте NCBI (<a href="https://blast.ncbi.nlm.nih.gov" target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 underline link-primary">https://blast.ncbi.nlm.nih.gov</a>).</p>
					<p>Использованный запрос — аминокислотная последовательность белка <span className="font-mono">Mercuric reductase (Q39ZA1_GEOMG)</span> из бактерии <span className="italic text-primary-500 dark:text-glow-500">Geobacter metallireduscens</span>.</p>
				</div>
				
				<h4 className="text-xl font-semibold mb-3">Параметры поиска:</h4>
				<ul className="list-disc pl-6 space-y-1.5 mb-6">
					<li><span className="font-semibold">Database:</span> Swiss-prot</li>
					<li><span className="font-semibold">Algorithm:</span> blastp</li>
					<li><span className="font-semibold">Expect threshold:</span> 0.05</li>
					<li><span className="font-semibold">Word size:</span> 5</li>
					<li><span className="font-semibold">Max matches in a query range:</span> 0</li>
					<li><span className="font-semibold">Matrix:</span> BLOSUM62</li>
					<li><span className="font-semibold">Gap Costs:</span> Existence: 11 Extension: 1</li>
					<li><span className="font-semibold">Compositional adjustments:</span> Conditional compositional score matrix adjustment</li>
					<li><span className="font-semibold">Filter:</span> no</li>
					<li><span className="font-semibold">Mask:</span> no</li>
				</ul>
				
				<div className="flex flex-col space-y-1 mb-4">
					<a href={pr10Part1Alignment} download="pr10_part1_alignment.txt" className="text-primary-600 dark:text-primary-400 underline link-primary">Текстовая выдача BLAST</a>
					<a href={pr10_1_jal} download="pr10_part1_jal.jvp" className="text-primary-600 dark:text-primary-400 underline link-primary">Проект Jalview</a>
				</div>
				
				<p className="mt-2">Для построения выравнивания была использована программа Muscle в Jalview. Все выбранные и исходный белки гомологичны и выровнялись на большей части своей длины.</p>
			</section>
			
			<section className="mb-12">
				<h3 className="section-header mb-4">Часть 2. Вирусные белки</h3>
				
				<h4 className="text-xl font-bold mb-3">Информация о белке</h4>
				<div className="space-y-2 mb-6">
					<p>Для работы я выбрал вирус иммунодефицита кошек (ВИК), из полипротеина вируса я выбрал белок, выполняющий функции обратной транскриптазы и рибонуклеазы H.</p>
					<p>Информация о вирусе и белке:</p>
				</div>
				
				<ul className="list-none pl-0 space-y-1 mb-4">
					<li><span className="font-semibold">AC:</span> P16088</li>
					<li><span className="font-semibold">ID:</span> POL_FIVPE</li>
					<li><span className="font-semibold">Organism:</span> Feline immunodeficiency virus (isolate Petaluma) (FIV)</li>
					<li><span className="font-semibold">Name:</span> Reverse transcriptase/ribonuclease H</li>
					<li><span className="font-semibold">Координаты использованного белка:</span> 155..690</li>
				</ul>
				
				<div className="mb-6">
					<a href={polSegmentFasta} download="POL_segment_FIVPE.fasta" className="text-primary-600 dark:text-primary-400 underline link-primary">Аминокислотная последовательность белка</a>
				</div>
				
				<h4 className="text-xl font-semibold mb-3 mt-6">Информация о выравнивании</h4>
				<p className="mb-3">База данных, как и остальные параметры поиска, такие же, как в части 1.</p>
				
				<div className="flex flex-col space-y-1 mb-4">
					<a href={pr10_2Alignment} download="pr10-part2-Alignment.txt" className="text-primary-600 dark:text-primary-400 underline link-primary">Текстовая выдача BLAST</a>
					<a href={pr10_2_jal} download="pr10_part2_jal.jvp" className="text-primary-600 dark:text-primary-400 underline link-primary">Проект Jalview</a>
				</div>
				
				<p className="mt-2">В топ‑100 находок в основном различные вирусы иммунодефицита, однако встречаются и другие ретровирусы. Я старался выбирать белки из разных и интересных вирусов, и, тем не менее, отчётливо видно, что все они гомологичны.</p>
			</section>
			
			{/* Часть 3 */}
			<section className="mb-12">
				<h3 className="section-header mb-4">Часть 3. Исследование зависимости E-value от объёма банка</h3>
				
				<div className="space-y-3 mb-4">
					<p>Для исследования объёма банка последовательностей было произведено сравнение поиска (blastp) с фильтром по таксону «Вирусы» и без него. Выдача BLASTP не сильно изменилась, однако E-value различаются примерно на три порядка.</p>
					<p>Например, в первом случае (без ограничений по таксону) E-value для Gag-pol polyprotein [Simian immunodeficiency virus (ISOLATE GB1)] равен 4е-154, а во втором — 2е-155.</p>
					<p>Отсюда следует, что доля вирусных белков равна <span className="font-mono">2е-155 / 4е-154 =</span> <span className="text-primary-500 dark:text-glow-500">5%</span>.</p>
				</div>
				
				<div className="mt-4">
					<a href={pr10_3Alignment} download="pr10-part3-Alignment.txt" className="text-primary-600 dark:text-primary-400 underline link-primary">Текстовая выдача BLAST</a>
				</div>
			</section>
		</>
	);
}