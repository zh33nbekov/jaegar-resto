import React, { createContext, useContext, useRef, useState } from 'react'

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
	const timeoutRef = useRef(null)

	const toggleSidebar = () => {
		if (sidebarVisible) hideSidebar()
		setSidebarVisible(true)
	}
	const hideSidebar = () => {
		setSidebarAnimationClass('closed')

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}

		timeoutRef.current = setTimeout(() => {
			setSidebarVisible(false)
			setSidebarAnimationClass('')
			timeoutRef.current = null
		}, 350)
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
