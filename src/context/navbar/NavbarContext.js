import React, { createContext, useContext, useEffect, useState } from 'react'
import { throttle } from '../../utils/throttle'

const NavbarContext = createContext({
	open: false,
	windowWidth: 0,
	isVisible: false,
	animationClass: '',
	toggleNavbar: () => {},
})
export const useNavbarContext = () => useContext(NavbarContext)

const NavbarProvider = ({ children }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [open, setOpen] = useState(false)
	const [animationClass, setAnimationClass] = useState('')
	const showNavbar = () => {
		setOpen(true)
	}
	const hideNavbar = () => {
		setAnimationClass('closed')
		const timeOut = setTimeout(() => {
			setOpen(false)
			setAnimationClass('')
		}, 200)

		return () => clearTimeout(timeOut)
	}
	const toggleNavbar = () => {
		if (open) {
			hideNavbar()
		} else {
			showNavbar()
		}
	}
	let isVisible = windowWidth > 655 ? true : false

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', throttle(handleResize, 500))
	}, [])

	const values = {
		open,
		isVisible,
		windowWidth,
		toggleNavbar,
		animationClass,
	}
	return (
		<NavbarContext.Provider value={values}>{children}</NavbarContext.Provider>
	)
}
export default NavbarProvider
