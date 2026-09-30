export default function Hero() {
	
	
	return (
		<section>
			
			
			<div className="text-center py-12 md:pb-24">
				
				
				<h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-10 leading-tight">
                    <span className="block text-gradient text-shadow-glow bg-clip-text">
                        KOSTASAURUS
                    </span>
					
				</h1>
				
				<div className="glass-gradient not-dark:bg-white!  max-w-3xl mx-auto
				mb-14 rounded-3xl  pt-6 pb-8 border dark:border-mystic-700">
					<p className="text-xl text-mystic-700 dark:text-mystic-200 leading-relaxed">
						Персональный сайт
					</p>
						<p className=" text-xl text-accent-300 font-semibold"> Константина Зельцера</p>
					
					<div className="mt-6 flex items-center justify-center space-x-4 text-mystic-400">
						<i className="fas fa-biohazard text-accent-400"></i>
						<span className="text-sm">ФББ МГУ</span>
						<i className="fas fa-dna text-primary-400"></i>
					</div>
				</div>
				
				<div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
					<a className="group btn-primary px-12 py-5 rounded-2xl! not-dark:bg-primary-100! not-dark:border-mystic-400!
  font-semibold text-xl relative overflow-hidden
  hover:scale-110 hover:shadow-3xl hover:shadow-primary-500/30
  transition-all duration-700 ease-out flex items-center justify-center dark: bg-glow-700/10! dark:hover:bg-glow-700/20!"
					href='index.html?/about'>
						<i className="fas fa-dna mr-6 group-hover:rotate-90 transition-transform duration-700"></i>
						<span className="group-hover:text-glow-500 group-hover:text-2xl has-hover:transition-all duration-700">Обо мне</span>
						<i className="fas fa-dna ml-6 group-hover:-rotate-90 transition-transform duration-700"></i>
					
					</a>
					
					
					
					
				</div>
			</div>
			
			
		</section>
	)
}