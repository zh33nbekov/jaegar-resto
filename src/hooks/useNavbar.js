import { useNavbarStore } from '../store/navbar'

export const useNavbar = () => {
	const open = useNavbarStore((state) => state.open)
	const hideNavbar = useNavbarStore((state) => state.hideNavbar)
	const forceCloseNavbar = useNavbarStore((state) => state.forceCloseNavbar)
	const showNavbar = useNavbarStore((state) => state.forceCloseNavbar)

	const handleClose = () => {
		hideNavbar()

		setTimeout(() => {
			forceCloseNavbar()
		}, 200)
	}
	const toggleNavbar = () => {
		if (open) {
			handleClose()
		} else {
			showNavbar()
		}
	}

	return { toggleNavbar }
}
