import {useEffect, useState} from 'react'

const getPage = () => {
	const index = window.location.href.lastIndexOf('?')
	// alert(index)
	if (index < 0) return '/'
	const page = window.location.href.substring(index + 1)
	console.log(page)
	return page
}

export const useRoute = () => {
	const [path, setPath] = useState(getPage())
		
		useEffect(() => {
			const onLocationChange = () => {
				
				setPath(getPage())
				
			}
			window.addEventListener('popstate', onLocationChange)
			
			return () => {
				window.removeEventListener('popstate', onLocationChange)
			}
			
		}, [])
	
	
	return path
}


const Router = (props) => {

	const { routes } = props
	const path = useRoute()
	const Page = routes[path] ?? routes['*']
	
	return <Page />
	
}


export default Router