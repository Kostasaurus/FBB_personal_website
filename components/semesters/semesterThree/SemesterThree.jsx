
export default function SemesterThree () {
	
	const works = [
		{
			title: "pr1",
			href: "index.html?/pr1",
			icon: "flask",
		},
		{
			title: "pr2",
			href: "index.html?/pr2",
			icon: "dna",
		},
	]
	
	return (
		
			
			
			<div className="container mx-auto px-4 py-8">
				<section id="home" className=" z-10">
					
					<header className="mb-12 flex flex-col items-center">
						<h2 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-primary-500 dark:text-shadow-glow dark:text-glow-500 inline-block">
             <span className="text-8xl  inline-block">ⅠⅠⅠ</span> Семестр
             
            </span>
						</h2>
						<p className="  text-center w-24 h-1 bg-primary-500 dark:bg-glow-500 rounded-full"></p>
					</header>
					<section>
						<div className="grid grid-cols-2 gap-15 mb-10">
							{works.map((item) => (
								<a
									href={item.href}
									// target="_blank"
									className="group btn-primary p-4 rounded-2xl! not-dark:bg-primary-100! not-dark:border-mystic-400!
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
					
					
					
					
					</section>
					
					
				</section>
			
			</div>
			
	)
	
	
}
