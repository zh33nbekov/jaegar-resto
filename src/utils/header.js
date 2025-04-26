export const handleToggleClick = (ref, toggleNavbar) => {
	toggleNavbar()
	const toggleButtonStyles = ref.current.getBoundingClientRect()
	window.localStorage.setItem(
		'toggleButton',
		JSON.stringify(toggleButtonStyles)
	)
}
