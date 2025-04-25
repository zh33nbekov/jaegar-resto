import { useEffect } from 'react'
import { useNavbarStore } from '../store/navbar'
import { throttle } from '../utils/throttle'

const NavbarProvider = ({ children }) => {
	const updateWindowWidth = useNavbarStore((state) => state.updateWindowWidth)
	const { throttled, cancel } = throttle(updateWindowWidth, 500)

	useEffect(() => {
		window.addEventListener('resize', throttled)
		return () => {
			cancel()
			window.removeEventListener('resize', throttled)
		}
	}, [cancel, throttled, updateWindowWidth])

	return children
}
export default NavbarProvider
