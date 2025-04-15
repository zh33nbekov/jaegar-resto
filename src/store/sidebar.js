import { create } from 'zustand'

export const useSidebarStore = create((set) => ({
	open: false,
	animationClass: '',

	hideSidebar: () => {
		set({ animationClass: 'closed' })
	},
	showSidebar: () => set({ open: true }),
	forceCloseSidebar: () => {
		set({ open: false, animationClass: '' })
	},
}))
