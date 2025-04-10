import React, { createContext, useContext, useState } from 'react'

const SidebarContext = createContext({
	hideSidebar: () => {},
	sidebarVisible: false,
	toggleSidebar: () => {},
	sidebarAnimationClass: '',
})
export const useSidebarContext = () => useContext(SidebarContext)

const SidebarProvider = ({ children }) => {
	const [sidebarVisible, setSidebarVisible] = useState(false)
	const [sidebarAnimationClass, setSidebarAnimationClass] = useState('')

	const toggleSidebar = () => {
		if (sidebarVisible) hideSidebar()
		setSidebarVisible(true)
	}
	const hideSidebar = () => {
		setSidebarAnimationClass('closed')
		const sideBarId = setTimeout(() => {
			setSidebarVisible(false)
			setSidebarAnimationClass('')
		}, 500)

		return () => clearTimeout(sideBarId)
	}

	const values = {
		hideSidebar,
		toggleSidebar,
		sidebarVisible,
		sidebarAnimationClass,
	}

	return (
		<SidebarContext.Provider value={values}>
			{children}
		</SidebarContext.Provider>
	)
}

export default SidebarProvider
