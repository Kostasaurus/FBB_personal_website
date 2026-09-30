import {createPortal} from "react-dom"


import {ModalYoutube} from "./ModalYoutube.jsx"
import {useState} from "react"
import {ModalWindow} from "./ModalWindow.jsx"

export default function ModalOpenButton() {
	
	
	const [isModalOpen, setIsModalOpen] = useState(false)
	
	return (
		<div>
			<button
				type="button"
				onClick={() => setIsModalOpen(true)}
				className="link-primary transition-colors">
				<i className="fab fa-youtube text-xl"></i>
			</button>
			
			{createPortal(
			<ModalWindow isOpen={isModalOpen}>
				<ModalYoutube
					handleSubmit={() => setIsModalOpen(false)}
				/>
			</ModalWindow>, document.body)}
		</div>
		
	);
}