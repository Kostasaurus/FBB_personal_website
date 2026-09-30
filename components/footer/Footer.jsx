import ModalOpenButton from "../elements/ModalOpenButton.jsx"

export default function Footer() {
	return (
		<footer className="bg-primary-50/80 dark:bg-primary-900/80  py-12 relative z-10">
			
				
				<div className="border-t border-gray-200 dark:border-mystic-900 pt-8 flex flex-col md:flex-col justify-between items-center gap-4">
					<div className="mb-4 md:mb-0">
						<p className="text-sm">© 2026 Kostasaurus. Все права защищены.</p>
					</div>
					<div className="flex space-x-4">
						<a href="https://github.com/Kostasaurus/"
						   target="_blank"
						   className="link-primary transition-colors">
							<i className="fab fa-github text-xl"></i>
						</a>
						<a href="https://t.me/kostyaiskostya"
						   target="_blank"
						   className="link-primary transition-colors">
							<i className="fab fa-telegram text-xl"></i>
						</a>
						
						<ModalOpenButton/>
						
						{/*<button*/}
						{/*	type="button"*/}
						{/*	onClick={() => alert('У меня пока нет youtube-канала, но скоро будет)')}*/}
						{/*	className="link-primary transition-colors">*/}
						{/*	<i className="fab fa-youtube text-xl"></i>*/}
						{/*</button>*/}
					</div>
				</div>
		</footer>
	)
}