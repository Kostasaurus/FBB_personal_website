import PageWrap from "../components/elements/PageWrap.jsx"


const PageNotFound = () => {
	
	
	
	
	return (
		
		<PageWrap>
			<section id="home" className="relative z-10">
				
				
				<div className="text-center py-12 md:pb-24 relative">
					
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-10 leading-tight">
                    <span className="block text-gradient text-shadow-glow bg-clip-text">
                         404
                    </span>
						<span className="block  text-gradient text-shadow-glow bg-clip-text mt-6">
                        Страница не найдена
                    </span>
					</h1>
				</div>
			</section>
		</PageWrap>
			
		
	
	)
	
}

export default PageNotFound