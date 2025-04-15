import { useNavbarStore } from '../store/navbar'

export const useNavbar = () => {
	const navbarStore = useNavbarStore()

	const handleClose = () => {
		navbarStore.hideNavbar()

		setTimeout(() => {
			navbarStore.forceCloseNavbar()
		}, 200)
	}
	const toggleNavbar = () => {
		if (navbarStore.open) {
			handleClose()
		} else {
			navbarStore.showNavbar()
		}
	}

	return { toggleNavbar }
}
