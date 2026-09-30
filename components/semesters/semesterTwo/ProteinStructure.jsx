import allImage from "../../../assets/4u7j_all.png";
import ssImage from "../../../assets/4u7j_ss.png";
import edoAllImage from "../../../assets/edo_all.png";
import edoCloseImage from "../../../assets/edo_close.png";
import hydr_main from "../../../assets/hydr_main.png";
import hydr_side from "../../../assets/side_hydr2.png";
import salt_bridge from "../../../assets/polar.png";
import cysteins from "../../../assets/cysteins.png";
import stacking from "../../../assets/stacking.png";

export default function ProteinStructure() {
	return (
		<>
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
					<p className="text-gradient pb-3">Structure analysis</p>
					<p className="text-gradient mb-2">of</p>
					<p>
            <span className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 inline-block">
              4U7J
            </span>
					</p>
				</h2>
				<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>
			
			<section className="mb-12">
				<h3 className="section-header mb-6 text-center">Структура в целом</h3>
				<div className="space-y-4">
					<p>
						В базе данных PDB идентификатору 4U7J соответствует белковый комплекс,
						выделенный из микобактерии{" "}
						<span className="italic">Mycolicibacterium thermoresistibile</span>.
					</p>
					<p>
						Структура состоит из двух идентичных по аминокислотной последовательности
						цепей: А и В. Биологическая единица представляет собой тетрамер.
					</p>
					<div className="flex flex-col items-center">
						<img src={allImage} alt="Общий вид структуры белка" className="rounded-xl w-3/4" />
						<p className="text-center mt-3 font-semibold">Рис.1 Структура белка в целом</p>
						<p className="text-center">Роз. — цепь А, Зел. — цепь В</p>
					</div>
				</div>
			</section>
			
			<section className="mb-12">
				<h3 className="section-header mb-6 text-center">Отдельные цепи</h3>
				<div className="space-y-4">
					<p>
						Данная макромолекула относится к виду{" "}
						<span className="italic">Mycolicibacterium thermoresistibile</span> и
						имеет uniprot_id G7CBN9. Название — G7CBN9_MYCT3.
					</p>
					<p>
						Данный комплекс относится к лигазам (аргининосукцинат-синтаза) и
						катализирует реакцию синтеза аргининосукцината из аспартата и цитруллина
						с использованием ATP:
					</p>
					<p className="text-center my-3">
						L-citrulline + L-aspartate + ATP = 2-(N(omega)-L-arginino)succinate +
						AMP + diphosphate + H<sup>+</sup>
					</p>
					<p>
						Мутаций и модифицированных аминокислотных остатков нет, однако для
						экспрессии в начало каждой цепи был добавлен His-tag (гистидиновый тег).
					</p>
					<p>
						В структуре преобладают альфа-спирали, однако присутствуют и бета-листы.
					</p>
					<div className="flex flex-col items-center">
						<img src={ssImage} alt="Вторичная структура белка" className="rounded-xl w-3/4" />
						<p className="text-center mt-3 font-semibold">Рис.2 Вторичная структура белка</p>
					</div>
				</div>
			</section>
			
			<section className="mb-12">
				<h3 className="section-header mb-6 text-center">Малые молекулы</h3>
				<div className="space-y-4">
					<p>
						Краткое имя — CL, полное имя — CHLORIDE ION,{" "}
						<a
							className="link-primary"
							target="_blank"
							href="https://docs.google.com/document/d/1-zKlQTcfFWlncfEjwfx6QQu9ErvKHf7A2jNMDs6BDbU/edit?usp=sharing"
							rel="noreferrer"
						>
							PDB-файл
						</a>.
					</p>
					<p>
						Краткое имя — EDO, полное имя — 1,2-ETHANEDIOL,{" "}
						<a
							className="link-primary"
							target="_blank"
							href="https://docs.google.com/document/d/10Jv2qzv_AmWwG8IgsN-EwJwucErb9krePMW9vmqPjKY/edit?usp=sharing"
							rel="noreferrer"
						>
							PDB-файл
						</a>.
					</p>
					<p className="my-4 text-center text-lg font-semibold">
						Аминокислотные остатки в радиусе 5 &#8491; от этандиола:
					</p>
					<div className="flex flex-col items-center mt-8">
						<img src={edoAllImage} alt="Общий вид взаимодействий с этандиолом" className="rounded-xl w-3/4" />
						<p className="text-center mt-3 font-semibold">Рис.3 — общий вид взаимодействий</p>
					</div>
					<div className="flex flex-col items-center mt-12">
						<img src={edoCloseImage} alt="Взаимодействия с этандиолом вблизи" className="rounded-xl w-3/4" />
						<p className="text-center mt-3 font-semibold">Рис.4 — взаимодействия вблизи</p>
					</div>
				</div>
			</section>
			
			<section className="mb-12">
				<h3 className="section-header mb-20 mt-30 text-center text-3xl!">Визуализация взаимодействий</h3>
				<p className="mb-6">
					<p className="mb-2">В изначальной структуре атомов водорода не было, для их отображения был использован сайт{" "}
					<a href="https://server.poissonboltzmann.org/pdb2pqr" target="_blank" rel="noreferrer" className="link-primary">
						https://server.poissonboltzmann.org/pdb2pqr
					</a>.</p>
					<p>pH был взят из страницы структуры на PDB, а именно 8.5.</p>
				</p>
				
				<div className="space-y-12">
					<div>
						<h4 className="text-2xl font-semibold mb-10">Водородные связи остова</h4>
						<div className="flex flex-col items-center">
							<img src={hydr_main} alt="Водородная связь остова" className="rounded-xl w-3/4" />
							<p className="text-center mt-3 font-semibold">Рис.5 — Водородная связь остова</p>
						</div>
						<div className="mt-4 space-y-1">
							<p><span className="font-semibold">Донор:</span> <span className="text-primary-600 dark:text-glow-500">Q398</span></p>
							<p><span className="font-semibold">Акцептор:</span> <span className="text-primary-600 dark:text-glow-500">D396</span></p>
							<p><span className="font-semibold">Расстояние O — H:</span> 3.1 Å</p>
						</div>
					</div>
					
					<div>
						<h4 className="text-2xl font-semibold mb-10">Водородные связи боковых цепей</h4>
						<div className="flex flex-col items-center">
							<img src={hydr_side} alt="Водородная связь боковых цепей" className="rounded-xl w-3/4" />
							<p className="text-center mt-3 font-semibold">
								Рис.6 — Водородная связь боковых цепей{" "}
								<span className="text-primary-600 dark:text-glow-500">R395</span> и{" "}
								<span className="text-primary-600 dark:text-glow-500">D396</span>
							</p>
						</div>
						<div className="mt-4 space-y-1">
							<p><span className="font-semibold">Донор:</span> <span className="text-primary-600 dark:text-glow-500">R395</span></p>
							<p><span className="font-semibold">Акцептор:</span> <span className="text-primary-600 dark:text-glow-500">D396</span></p>
							<p><span className="font-semibold">Расстояние O — H:</span> 2.1 Å</p>
						</div>
					</div>
					
					<div>
						<h4 className="text-2xl font-semibold mb-10">Солевые мостики</h4>
						<div className="flex flex-col items-center">
							<img src={salt_bridge} alt="Солевой мостик" className="rounded-xl w-3/4" />
							<p className="text-center mt-3 font-semibold">
								Рис.7 — Солевой мостик между{" "}
								<span className="text-primary-600 dark:text-glow-500">K321</span> и{" "}
								<span className="text-primary-600 dark:text-glow-500">E325</span>
							</p>
						</div>
						<div className="mt-4 space-y-1">
							<p><span className="font-semibold">Донор:</span> <span className="text-primary-600 dark:text-glow-500">K321</span></p>
							<p><span className="font-semibold">Акцептор:</span> <span className="text-primary-600 dark:text-glow-500">E325</span></p>
							<p><span className="font-semibold">Расстояние O — N:</span> 2.7 Å</p>
						</div>
					</div>
					
					<div>
						<h4 className="text-2xl font-semibold mb-10">Дисульфидные связи</h4>
						<p className="mb-4">
							Дисульфидных связей обнаружено не было, поэтому приведено изображение всех 6 остатков цистеина в белке.
						</p>
						<div className="flex flex-col items-center">
							<img src={cysteins} alt="Остатки цистеина" className="rounded-xl w-3/4" />
							<p className="text-center mt-3 font-semibold">Рис.8 — Все остатки цистеина</p>
						</div>
					</div>
					
					{/* Стекинг-взаимодействия */}
					<div>
						<h4 className="text-2xl font-semibold mb-10">Стекинг-взаимодействия</h4>
						<div className="flex flex-col items-center">
							<img src={stacking} alt="Стекинг-взаимодействие" className="rounded-xl w-3/4" />
							<p className="text-center mt-3 font-semibold">
								Рис.9 — Стекинг-взаимодействие между{" "}
								<span className="text-primary-600 dark:text-glow-500">Y72</span> и{" "}
								<span className="text-primary-600 dark:text-glow-500">W316</span>
							</p>
						</div>
						<div className="mt-4 space-y-3">
							<p>
								Для нахождения стекинг-взаимодействий в начале были выделены все ароматические аминокислоты
								(Phe, His, Trp, Tyr), затем была выбрана пространственно близкая пара из полученной выборки.
								Были выбраны все атомы её ароматического кольца и определён его центр командами:
							</p>
							<pre className="bg-gray-100 dark:bg-green-800/30 p-4 rounded-lg overflow-x-auto text-sm font-mono">
{`# пример для Y72:
select ring1, (stacking_Y72 and name CG+CD1+CD2+CE1+CE2+CZ)
pseudoatom cent1, ring1`}
              </pre>
							<p>Расстояние между двумя центрами показано на изображении.</p>
							<div className="space-y-1">
								<p><span className="font-semibold">АК1:</span> <span className="text-primary-600 dark:text-glow-500">Y72</span></p>
								<p><span className="font-semibold">АК2:</span> <span className="text-primary-600 dark:text-glow-500">W316</span></p>
								<p><span className="font-semibold">Расстояние между центрами ароматических систем:</span> 5 Å</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}