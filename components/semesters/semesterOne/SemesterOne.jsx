export default function SemesterOne () {
	
	const works = [
		{
			title: "Практикум 14",
			href: "https://colab.research.google.com/drive/1OJNBUPPyqFncsKui3ZAYnltN7UL7UV2F?usp=sharing",
			icon: "laptop-code",
		},
		{
			title: "Мини-обзор",
			href: "index.html?/minireview",
			icon: "scroll",
		},
		{
			title: "CDS table",
			href: "https://docs.google.com/spreadsheets/d/1F7vA-wDnbBMvlVH8vGUqnXES4Luk0IcB7Hh6xUynLb8/edit?usp=sharing",
			icon: "dna",
		},
		{
			title: "Feature table",
			href: "https://docs.google.com/spreadsheets/d/1ICRswbOJO6oJtHKFgDUa_I19OWcYZkP1QSR8448B4uk/edit?usp=sharing",
			icon: "microscope",
		},
	];
	
	
	return (
		<section>
			
			
			<header className="mb-12 flex flex-col items-center">
				<h2 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 inline-block">
             <span className="text-8xl  inline-block"> Ⅰ</span> Семестр
             
            </span>
				</h2>
				<p className="  text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
			</header>
			
			<div className="glass-gradient mb-10 rounded-2xl p-6 text-center">
				<p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200">
					<i className="text-glow-600 dark:text-glow-400 font-semibold fas fa-bacterium mr-3"></i>
					<span className="font-medium">Выбранная бактерия — </span>
					<span className="text-glow-600 dark:text-glow-400 font-semibold whitespace-nowrap">
            <span className="italic">Geobacter metallireducens</span> GS-15
          </span>
				</p>
			</div>
		
			
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
				{works.map((item) => (
					<a
					href={item.href}
					target="_blank"
					className="group btn-primary p-4  rounded-2xl! not-dark:bg-primary-100! not-dark:border-mystic-400!
  font-semibold text-xl relative overflow-hidden
  hover:scale-110 hover:shadow-3xl hover:shadow-primary-500/30
  transition-all duration-700 ease-out flex items-baseline justify-center  dark: bg-glow-700/10! dark:hover:bg-glow-700/20! "
					>
						<i className={`text-lg mr-2 fas fa-${item.icon}`}></i>
						<div className="font-medium text-sm md:text-base  group-hover:text-glow-600 dark:group-hover:text-glow-400">
							{item.title}
						</div>
					</a>
				))}
			
			
			</div>
			
			
		
			
			<div className="flex flex-col items-center w-full">
				<div className="mb-3 text-center">
					<a
						className="inline-block text-2xl font-semibold text-glow-600 dark:text-glow-400 hover:underline"
						href="https://docs.google.com/spreadsheets/d/1WNv3XHIGL27jP2nWvT14ZnsM2vh4wEZeblVZ2Ckh8ns/edit?usp=sharing"
					>
						Classwork 8
					</a>
				</div>
				
				<div className="rounded-2xl border border-mystic-200 shadow-btn-primary dark:border-mystic-700 overflow-hidden w-full">
					<div className="overflow-x-auto">
						<table className="w-full border-x-0">
							<thead className="bg-gray-50 p-6 rounded-2xl dark:bg-forest-button">
							<tr>
								<th className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-primary-400 dark:border-glow-700">
									MTase
								</th>
								<th className="text-center p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
									m6A
								</th>
								<th className="text-center p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
									m5C
								</th>
								<th className="text-center p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
									m4C
								</th>
								<th className="text-center p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
									m5C,m6A
								</th>
								<th className="text-center p-2 md:p-4 font-semibold border-r border-mystic-200 dark:border-mystic-800">
									m4C,m6A
								</th>
								<th className="text-center p-2 md:p-4 font-semibold">
									m..
								</th>
							</tr>
							</thead>
							<tbody>
							<tr className="border-t border-x-0 border-mystic-200 dark:border-mystic-800 bg-white dark:bg-forest-twilight">
								<td className="text-center text-primary-600 dark:text-glow-500 p-2 md:p-4 font-semibold border-r border-primary-400 dark:border-glow-700">
									Count
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									1664
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									203
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									119
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									5
								</td>
								<td className="text-center p-2 md:p-4 border-r border-mystic-200 dark:border-mystic-800">
									3
								</td>
								<td className="text-center p-2 md:p-4">
									96
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		
		</section>
	)
	
	
}