import Footer from "../footer/Footer.jsx"
import Header from "../header/Header.jsx"

export default function PageWrap ({ children }) {
	
	return(
		
			<div className="bg-primary-50 text-primary-800 dark:bg-primary-900 dark:text-lime-50 min-h-screen">
				<Header />
				<div className="container mx-auto px-4 py-8">
					
					{children}
				
				</div>
				<Footer />
			</div>
		
		)
		
	}
	
	