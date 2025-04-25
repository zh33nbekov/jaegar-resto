import { useNavbarStore } from '../store/navbar'

export const useNavbar = () => {
	const navbarStore = useNavbarStore()

	const handleClose = () => {
		navbarStore.hideNavbar()

		setTimeout(() => {
			navbarStore.forceCloseNavbar()
		}, 350)
	}
	const toggleNavbar = () => {
		if (navbarStore.open) handleClose()
		navbarStore.showNavbar()
	}

	return { handleClose, toggleNavbar }
}
