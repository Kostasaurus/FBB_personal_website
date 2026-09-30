export default function Unipot() {
	return (
		<>
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
					<p className="text-gradient pb-3">Анализ белка</p>
					
					<p>
            <span className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 inline-block">
              mercuric reductase
            </span>
					</p>
				</h2>
				<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>
			
			<section className="mb-5 text-center">
				<h3 className="section-header mb-3">Введение</h3>
				<p className="text-left">
					<p>Бактерия — <span className="italic">Geobacter metallireducens</span>. В одной из задач своего
						миниобзора я нашёл предполагаемый оперон, участвующий в метаболизме ртути, поэтому и для
						этого задания решил взять этот белок.</p> <p>К тому же мне довольно интересна тема метаболизма
					необычных металлов и соединений (моя бактерия способна перерабатывать уран, плутоний и
					другие актиниды, но за это отвечают различные цитохромы, а не специальные гены).</p>
				</p>
				<p className="text-left mt-3">
					Использовал поисковый запрос: <span className="text-primary-700 dark:text-glow-500 ">(taxonomy_id:269799) AND mercury</span> и
					получил только один белок, который и использовал —{' '}
					<span className="font-mono">Mercuric reductase (Q39ZA1_GEOMG)</span>.
				</p>
			</section>
			
			<section className="mb-5 text-center">
				<h3 className="section-header mb-3">Характеристика белка</h3>
				<p className="text-left">
					<span className="font-semibold">Mercuric reductase (ртуть(II)-редуктаза)</span> — данный белок
					участвует в детоксикации ионов ртути, попавших в клетку бактерии, за счёт катализирования
					реакции восстановления:
				</p>
				<p className="text-center my-3 font-mono">
					Hg<sup>2+</sup> + NADP<sup>+</sup> + H<sup>+</sup> → Hg<sup>0</sup> + NADPH
				</p>
				<p className="text-left">
					В качестве кофактора фермент использует FAD, ион ртути связывается атомами серы двух
					цистеинов.
				</p>
			</section>
			
			<section className="mb-5">
				<h3 className="section-header mb-3 text-center">Поисковые запросы в UniProt</h3>
				<div className="space-y-2 text-left">
					<section className="mb-5"><p>
						🔍 <span className="font-mono">(protein_name:"Mercuric reductase")</span> — получено
						<strong> 6713 </strong> результатов, что говорит о том, что белок достаточно распространён.
					</p>
						<p>
							🔍 <span className="font-mono">(protein_name:"Mercuric reductase") NOT (gene:merA)</span> —{' '}
							<strong>3563</strong> результата.
						</p></section>
					<p className="mt-3">Затем я решил посмотреть представленность в различных таксономических группах:</p>
					<p>
						🔍 <span className="font-mono">(protein_name:"Mercuric reductase") AND (taxonomy_id:2157)</span> — в
						археях только <strong>190</strong> записей, соответствующих ртуть-редуктазе.
					</p>
					<p>
						🔍 <span className="font-mono">(protein_name:"Mercuric reductase") AND (taxonomy_id:2759)</span> — у
						эукариот <strong>426</strong> результатов, большинство из них относится к различным
						аскомицетам, причём почти все белки найдены за счёт гомологии.
					</p>
					<p>
						Только один задокументирован на уровне транскрипта —{' '}
						<span className="italic">Laminaria digitata</span>, причём он входит в два единственных
						эукариота с геном <span className="font-mono">merA</span><p> (запрос -{' '}
						<span
							className="font-mono">(protein_name:"Mercuric reductase") AND (gene:merA) AND (taxonomy_id:2759)</span>)</p>
					</p>
					<section className="mt-5"><p>
						🔍 <span className="font-mono">(protein_name:"Mercuric reductase") AND (taxonomy_id:33208)</span> — у
						Metazoa <strong>2</strong> результата: губка и довольно распространённая нематода{' '}
						<span className="italic">Panagrellus redivivus</span>.
					</p>
						<p className="mt-3 mb-2 ">
							Мне довольно интересны лишайники, поэтому ради интереса я решил посмотреть, нет ли у
							кого-нибудь из них этого белка, и выбрал самый богатый видами таксон — Lecanoromycetes:
						</p>
						<p>
							🔍 <span className="font-mono">(protein_name:"Mercuric reductase") AND (taxonomy_id:147547)</span> —{' '}
							<strong>4</strong> вида, причём довольно распространённые (например,{' '}
							<span className="italic">Ramalina farinacea</span> (рамалина мучнистая) часто встречается на
							территории РФ).
						</p></section>
				</div>
			</section>
		</>
	);
}