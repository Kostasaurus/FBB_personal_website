import dnaStructure from '../../../assets/ketcher_2.png'

export default function Pr1() {
	return (
		<>
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 flex-col items-center justify-center text-center">
					<p className="text-primary-500 dark:text-glow-500 pb-3">Практикум 1</p>
				</h2>
				<p className="text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>

			<div className="flex justify-center mb-10  ">
				<img
					src={dnaStructure}
					alt="Двуцепочечная структура ДНК"
					className="rounded-2xl w-full max-w-2xl dark:bg-green-50 p-7"
				/>
			</div>
		</>
	)
}
