export function ModalWindow(props) {
	const { isOpen, children } = props
	
	if (isOpen) return (
		<>
			<div
				className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 pointer-events-none"
			
			/>
			<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50  p-2 md:p-4">
				<div className=" z-60 bg-primary-50 dark:bg-primary-900  border-3 dark:border border-gray-300 dark:border-mystic-800 rounded-2xl max-w-[80vh] lg:max-w-4xl w-full max-h-[75vh] overflow-y-auto custom-scrollbar">
					{children}
				</div>
			</div>
			</>
				)
}

