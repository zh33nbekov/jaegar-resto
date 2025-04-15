import { useEffect } from 'react'
import { useNavbarStore } from '../store/navbar'
import { throttle } from '../utils/throttle'

const NavbarProvider = ({ children }) => {
	const updateWindowWidth = useNavbarStore((state) => state.updateWindowWidth)

	useEffect(() => {
		const throttledResize = throttle(updateWindowWidth, 500)
		window.addEventListener('resize', throttledResize)
		return () => window.removeEventListener('resize', throttledResize)
	}, [updateWindowWidth])

	return children
}
export default NavbarProvider
