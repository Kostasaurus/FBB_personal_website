import pr9_jalview_project from '../../../assets/pr9_jalview.jvp'


export default function Pr9 () {
	
	return (
		<>
			
			
			<section>
					<div className=" text-center mb-10">
						<p
							className="inline-block text-4xl font-semibold text-glow-600 dark:text-glow-400"
						>
							Задание 2
						</p>
					</div>
					
				<div className="flex flex-col items-center w-full mb-10">
					<div className="mb-3 text-center">
						<p
							className="inline-block text-2xl font-semibold text-glow-600 dark:text-glow-400"
						>
							Global
						</p>
					</div>
					
					<div
						className="rounded-2xl border border-mystic-200 shadow-btn-primary dark:border-mystic-700 overflow-hidden w-full">
						<div className="overflow-x-auto">
							<table className="w-full border-x-0">
								<thead className="bg-gray-50 p-6 rounded-2xl dark:bg-forest-button">
								<tr>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Protein Name
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										ID 1
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										ID 2
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Score
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										% Identity
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										% Similarity
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Gaps
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold ">
										Indels
									</th>
								</tr>
								</thead>
								<tbody>
								<tr
									className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										DNA polymerase I
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										DPO1_BACSU
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										DPO1_ECOLI
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										1613.0
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										40.1
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										57.2
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										94
									</td>
									<td className="text-center p-2 md:p-4">
										19
									</td>
								</tr>
								<tr
									className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										Molybdopterin molybdenumtransferase
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										MOEA_BACSU
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										MOEA_ECOLI
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										445.0
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										29.2
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										42.6
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										83
									</td>
									<td className="text-center p-2 md:p-4">
										12
									</td>
								</tr>
								<tr
									className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										Methionyl-tRNA formyltransferase
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										FMT_BACSU
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										FMT_ECOLI
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										664.5
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										42.7
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										56.1
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										24
									</td>
									<td className="text-center p-2 md:p-4">
										4
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				
				<div className="flex flex-col items-center w-full">
					<div className="mb-3 text-center">
						<p
							className="inline-block text-2xl font-semibold text-glow-600 dark:text-glow-400"
						>
							Local
						</p>
					</div>
					
					<div
						className="rounded-2xl border border-mystic-200 shadow-btn-primary dark:border-mystic-700 overflow-hidden w-full">
						<div className="overflow-x-auto">
							<table className="w-full border-x-0">
								<thead className="bg-gray-50 p-6 rounded-2xl dark:bg-forest-button">
								<tr>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Protein Name
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										ID 1
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										ID 2
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Score
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										% Identity
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										% Similarity
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Gaps
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Indels
									</th>
									<th
										className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Coverage 1
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold ">
										Coverage 2
									</th>
								</tr>
								</thead>
								<tbody>
								<tr
									className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										DNA polymerase I
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										DPO1_BACSU
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										DPO1_ECOLI
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										1616.0
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										40.3
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										57.6
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										92
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										18
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										99.0%
									</td>
									<td className="text-center p-2 md:p-4">
										99.2%
									</td>
								</tr>
								<tr
									className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										Molybdopterin molybdenumtransferase
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										MOEA_BACSU
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										MOEA_ECOLI
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										465.0
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										32.3
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										47.2
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										37
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										9
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										93.7%
									</td>
									<td className="text-center p-2 md:p-4">
										94.9%
									</td>
								</tr>
								<tr
									className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										Methionyl-tRNA formyltransferase
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										FMT_BACSU
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										FMT_ECOLI
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										670.0
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										46.1
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										60.9
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										1
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										1
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										93.4%
									</td>
									<td className="text-center p-2 md:p-4">
										93.7%
									</td>
								</tr>
								</tbody>
							</table>
						</div>
						
					</div>
				</div>
				
				<section className="mt-5"><p className="mb-3">Выбранные белки гомологичны по большей части своей длины:</p>
					<p>В <span className="text-glow-600 dark:text-glow-400">DPO1</span> имеется несколько крупных инделей внутри последовательности</p>
					<p>В <span className="text-glow-600 dark:text-glow-400">MOEA</span> крупные индели расположены ближе к краям последовательностей, а также не очень большое число
						маленьких разбросанных внутри последовательностей</p>
					<p>В <span className="text-glow-600 dark:text-glow-400">FMT</span> число инделей совсем маленькое и все они расположены в начале или конце последовательностей, что
						согласуется с важностью этого белка для бактерии.</p>
					<p className="mt-3">Локальное выравнивание сильно информативнее в случае <span className="text-glow-600 dark:text-glow-400">FMT</span> и лишь незначительно для <span className="text-glow-600 dark:text-glow-400">MOEA</span></p>
				</section>
			</section>
			
			<section className="mt-20">
				<div className="flex flex-col items-center w-full mb-10">
					<div className="text-center mb-10">
						<p
							className="inline-block text-4xl font-semibold text-glow-600 dark:text-glow-400"
						>
							Случайная пара белков
						</p>
					</div>
				
				<div className="flex flex-col items-center w-full mb-10">
					<div className="mb-3 text-center">
						<p
							className="inline-block text-2xl font-semibold text-glow-600 dark:text-glow-400"
						>
							Global
						</p>
					</div>
					
					<div className="rounded-2xl border border-mystic-200 shadow-btn-primary dark:border-mystic-700 overflow-hidden w-full">
						<div className="overflow-x-auto">
							<table className="w-full border-x-0">
								<thead className="bg-gray-50 p-6 rounded-2xl dark:bg-forest-button">
								<tr>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Protein Name 1
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Protein Name 2
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										ID 1
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										ID 2
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Score
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										% Identity
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										% Similarity
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Gaps
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold ">
										Indels
									</th>
								</tr>
								</thead>
								<tbody>
								<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										Arabinose import ATP-binding protein
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										Glutathione hydrolase proenzyme
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										ARAG_BACSU
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										GGT_ECOLI
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										46.0
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										17.8
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										30.6
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										237
									</td>
									<td className="text-center p-2 md:p-4">
										37
									</td>
								</tr>
								
								</tbody>
							</table>
						</div>
					</div>
				</div>
				
				<div className="flex flex-col items-center w-full">
					<div className="mb-3 text-center">
						<p
							className="inline-block text-2xl font-semibold text-glow-600 dark:text-glow-400"
						>
							Local
						</p>
					</div>
					
					<div className="rounded-2xl border border-mystic-200 shadow-btn-primary dark:border-mystic-700 overflow-hidden w-full">
						<div className="overflow-x-auto">
							<table className="w-full border-x-0">
								<thead className="bg-gray-50 p-6 rounded-2xl dark:bg-forest-button">
								<tr>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Protein Name 1
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Protein Name 2
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										ID 1
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										ID 2
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Score
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										% Identity
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										% Similarity
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Gaps
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Indels
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
										Coverage 1
									</th>
									<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold ">
										Coverage 2
									</th>
								</tr>
								</thead>
								<tbody>
								<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										Arabinose import ATP-binding protein
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										Glutathione hydrolase proenzyme
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										ARAG_BACSU
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										GGT_ECOLI
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										58.5
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										20.8
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										35.8
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										58
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										13
									</td>
									<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
										42.9%
									</td>
									<td className="text-center p-2 md:p-4">
										35.1%
									</td>
								</tr>
								
								</tbody>
							</table>
						</div>
					</div>
				</div>
				</div>
			</section>
			
			<section className="mt-5"><p className="mb-3">Выводы:</p>
				<p>Исходя из глобального выравнивания следует, как и ожидалось, что данные белки не являются гомологами. (слишком маленький процент идентичности и слишком много инделей).</p>
				<p>Однако локальное выравнивание выявило относительно консервативный регион, занимающий около трети  каждого из белков и, возможно, соответствующий общему домену.</p>
				
			</section>
			
			
			<section>
				<div className=" text-center mt-10 mb-10">
					<p
						className="inline-block text-4xl font-semibold text-glow-600 dark:text-glow-400"
					>
						Множественное выравнивание
					</p>
				</div>
				
				<p className="mb-5">Я выбрал MOEA - <span className="text-glow-600 dark:text-glow-400">Molybdopterin molybdenumtransferase</span>, в Swiss-Prot было найдено всего 16 белков. Я выбрал:
				</p>
				<ul className="mb-5">
					<li><span className="text-glow-600 dark:text-glow-400"> MOEA_STAAN</span> (<span className="italic">Staphylococcus aureus</span>)</li>
					<li><span className="text-glow-600 dark:text-glow-400"> MOEA_SYNE7</span> (<span className="italic">Synechococcus elongatus</span>)</li>
					<li><span className="text-glow-600 dark:text-glow-400"> MOEA_SALTY</span> (<span className="italic">Salmonella typhimurium</span>)</li>
					<li><span className="text-glow-600 dark:text-glow-400"> MOEA_HAEIN</span> (<span className="italic">Haemophilus influenzae</span>)</li>
					<li><span className="text-glow-600 dark:text-glow-400"> MOEA_NOSS1</span> (<span className="italic">Nostoc sp.</span> PCC 7120)</li>
				</ul>
			<p>Выравнивание сделал на сайте Uniprot при помощи Tools > Align:</p>
				
				<a href={pr9_jalview_project}
				   download="pr9_jalview_project.jvp"
				   className="link-primary mt-3 mb-5 flex-row justify-center items-center"
				><i className="fas fa-link pr-2 pt-0.5 text-sm"/>Проект Jalview</a>
				
				<p>Как мне кажется, белки гомологичны, однако процент идентичности небольшой.</p>
				<p>В выравнивании отчетливо присутствуют несколько общих для всех семи видов участки в 10-20 аминокислот (например, 75-88, 125-140, 280-290)</p>
			</section>
		</>
	)
}