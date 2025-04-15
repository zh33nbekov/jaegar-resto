import { create } from 'zustand'

export const useNavbarStore = create((set, get) => ({
	open: false,
	animationClass: '',
	windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
	isVisible: typeof window !== 'undefined' ? window.innerWidth > 655 : false,

	showNavbar: () => set({ open: true }),

	hideNavbar: () => {
		set({ animationClass: 'closed' })
	},
	forceCloseNavbar: () => {
		set({ open: false, animationClass: '' })
	},

	updateWindowWidth: () => {
		const width = window.innerWidth
		set({
			windowWidth: width,
			isVisible: width > 655,
		})
	},
}))
