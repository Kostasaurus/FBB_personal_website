

export function ModalYoutube (props) {
	const {
		
		handleSubmit,
		
	} = props
	
	
	
	
	
	
	
	
	return (
		<div className="p-5">
			
			<div className="grid grid-cols-1 gap-20 md:mx-40 mb-3 px-3 md:p-4">
				
				<div className=" font-bold text-3xl text-center">
					<p><span className="text-gradient"> У меня пока нет</span> <span className="text-glow-500">youtube-канала,</span>
					</p>
						<p className="text-gradient">но скоро будет)</p>
				</div>
					<button
						type="button"
						className="px-6 py-3 rounded-lg  modal-submit-button"
						onClick={handleSubmit}
					>
						Понятно
					</button>
			</div>
		</div>
	
	
	
	
	
	
	)
	
	
	
	
	
	
	
}