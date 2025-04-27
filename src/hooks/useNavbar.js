import { useCallback } from 'react'
import { useNavbarStore } from '../store/navbar'

export const useNavbar = () => {
	const hideNavbar = useNavbarStore((state) => state.hideNavbar)
	const forceCloseNavbar = useNavbarStore((state) => state.forceCloseNavbar)
	const open = useNavbarStore((state) => state.open)
	const showNavbar = useNavbarStore((state) => state.showNavbar)

	const handleClose = useCallback(() => {
		hideNavbar()

		setTimeout(() => {
			forceCloseNavbar()
		}, 350)
	}, [])
	const toggleNavbar = useCallback(() => {
		if (open) handleClose()
		showNavbar()
	}, [])

	return { handleClose, toggleNavbar }
}
