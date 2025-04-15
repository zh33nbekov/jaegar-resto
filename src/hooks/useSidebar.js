import { useSidebarStore } from '../store/sidebar'

export const useSidebar = () => {
	const sidebarStore = useSidebarStore()
	const handleClose = () => {
		sidebarStore.hideSidebar()

		setTimeout(() => {
			sidebarStore.forceCloseSidebar()
		}, 350)
	}
	const toggleSidebar = () => {
		if (sidebarStore.open) handleClose()
		sidebarStore.showSidebar()
	}
	return { handleClose, toggleSidebar }
}
