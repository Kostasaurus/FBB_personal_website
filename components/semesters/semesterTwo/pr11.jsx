import dot_png from '../../../assets/hit_matrix.png'
import pr11_jalview_project from '../../../assets/pr11_jalview_project.jvp'


export default function Pr11() {
	return (
		<>
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
					<p className="text-primary-500 dark:text-glow-500 pb-3">Практикум 11</p>
				</h2>
				<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>
			
			<section className="mb-15">
				<h3 className="section-header mb-3">Часть 1. Семейство доменов Ankyrin repeat (PF00023)</h3>
				<p className="mb-1">
					<span className="font-semibold">AC (Pfam):</span>{' '}
					<span className="font-mono">PF00023</span>
				</p>
				<p className="mb-1">
					<span className="font-semibold">ID (Pfam):</span>{' '}
					<span className="font-mono">Ankyrin repeat</span>
				</p>
				
				<p className="mb-1">
					<span className="font-semibold">Число последовательностей в seed:</span> 1058
				</p>
				<p className="mb-1">
					<span className="font-semibold">Число последовательностей в full:</span> 85474
				</p>
				<p className="mb-1">
					<span className="font-semibold">Число  белков с доменом  Swissprot:</span> 423
				</p>
				<p className="mb-1">
					<span className="font-semibold">Число разных доменных архитектур:</span> 30000
				</p>
				<p className="mb-1">
					<span className="font-semibold">Число доменов с известной 3D структурой:</span> 637
				</p>
				<p className="mb-2">
					<span className="font-semibold">Taxonomy</span>
				</p>
					<p>
						<span className="font-semibold ml-2 mb-1">Bacteria:</span> 11559
					</p>
					<p>
					<span className="font-semibold ml-2 mb-1">Archaea:</span> 70
				</p>
					<p>
						<span className="font-semibold ml-2">Eukaryota:</span> 229232
					</p>
				
				
				
				<p className="mt-3">
					<span className="font-semibold">Кратко о структуре и функции:</span> <p>Анкириновый мембраносвязывающий домен состоит из 24 тандемно расположенных повторов,
					каждый из которых состоит из 33 аминокислот.</p>
					<p>Сам повтор имеет L-образную форму и состоит из двух альфа-спиралей соединенных бета-шпилькой. </p>Домен обеспечивает связывание анкирина с интегральными мебранными белками, например,
					потенциал-зависимые Na-каналы мозга и нервно-мышечных синапсов, Na,K-ATPaзa, Н,К-АТРаза слизистой оболочки желудка и др. Однако этот домен есть и во многих других белках.
				</p>
			</section>
			
			<section className="mb-15">
				<h3 className="section-header mb-3">Часть 2. Выравнивание seed и блоки достоверной гомологии</h3>
				
				
				<p className="mt-5">
					<span className="font-semibold">Проект JalView (seed):</span>{' '}
					<a
						href={pr11_jalview_project}
						download="pr11_jalview_project.jvp"
						className="text-primary-600 dark:text-primary-400 underline link-primary"
					>
						pr11.jvp
					</a>
				</p>
				
				<div className="rounded-2xl border mt-10 border-mystic-200 shadow-btn-primary dark:border-mystic-700 overflow-hidden w-full">
					<div className="overflow-x-auto">
						<table className="w-full border-x-0">
							
							<tbody>
							<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									Выравнивание seed
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									1058 последовательностей, 141 колонка
								</td>
								
							</tr>
							<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									МДБ-all
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									2-7
								</td>
								
							</tr>
							<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									100% консервативные колонки в  МДБ-all
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									114:[LIVMFA](1046 из 1058)
								</td>
							</tr>
							<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									МДБ-notAll
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									от 2й по 7ю колонки, от 1й до 517й последовательности
								</td>
							</tr>
								<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									100% консервативные колонки в  МДБ-notAll
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									(2:G); (7:H); 6:[LIVMAF](511 из 517)
								</td>
								</tr>
									<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									Недостоверный блок
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									от 114 до 141 колонки
								</td>
									</tr>
								
								
							
							</tbody>
						</table>
					</div>
				</div>
			
			</section>
			
			<section className="mb-15">
				<h3 className="section-header mb-3">
					Часть 3. Карта локального сходства (dotplot) двух последовательностей
				</h3>
				<div className="rounded-2xl border mt-10 border-mystic-200 shadow-btn-primary dark:border-mystic-700 overflow-hidden w-full">
					<div className="overflow-x-auto">
						<table className="w-full border-x-0">
							
							<tbody>
							<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									доменная архитектура 1
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									PF12796-PF00023-PF12796
								</td>
							
							</tr>
							<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									Белок с архитектурой 1
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									P50086
								</td>
							</tr>
							<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									доменная архитектура 2
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									PF12796-PF00023
								</td>
							
							</tr>
							<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									Белок с архитектурой 2
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									Q65142
								</td>
							
							</tr>
							
							
							
							</tbody>
						</table>
					</div>
				</div>
			</section>
			<section className="flex-col flex items-center">
				<p className="">
					
					<img src={dot_png} alt="matrix" className="rounded-xl mx-auto"/>
				</p>
				<p className="text-center mt-1 font-semibold">Карта локального сходства</p>
				<p className="mt-8 text-left">
					<p>По вертикальной оси P50086 (Subject), горизонтальной - Q65142 (Query)</p>
					<p>По карте локального сходства видно, что скорее всего в ходе эволюции произошли две вставки, по одной в каждый белок. (так как отдельный участок лежит ниже левой части графика, следовательно, произошла вставка в Query (т.е в Q65142). Со второй вставкой соответсвенно наоборот.</p>
				</p>
				
			</section>
			
			
		</>
	);
}