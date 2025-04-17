import { useRef } from 'react'
import { useSidebarStore } from '../store/sidebar'

export const useSidebar = () => {
	const sidebarStore = useSidebarStore()
	const timeoutRef = useRef(null)
	const handleClose = () => {
		sidebarStore.hideSidebar()

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}

		timeoutRef.current = setTimeout(() => {
			sidebarStore.forceCloseSidebar()
			timeoutRef.current = null
		}, 350)
	}
	const toggleSidebar = () => {
		if (sidebarStore.open) handleClose()
		sidebarStore.showSidebar()
	}
	return { handleClose, toggleSidebar }
}
