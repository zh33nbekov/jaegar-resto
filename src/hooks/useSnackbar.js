import { useRef, useState } from 'react'

export const useSnackbar = () => {
	const [open, setOpen] = useState(false)
	const [message, setMessage] = useState('')
	const [animationClass, setAnimationClass] = useState('')
	const timeoutRef = useRef(null)
	const showSnackbar = (message) => {
		setMessage(message)
		setOpen(true)
	}
	const hideSnackbar = () => {
		setAnimationClass('closed')

		if (timeoutRef.current !== null) {
			clearTimeout(timeoutRef.current)
		}

		timeoutRef.current = setTimeout(() => {
			setOpen(false)
			setAnimationClass('')
			timeoutRef.current = null
		}, 500)
	}

	return {
		open,
		message,
		showSnackbar,
		hideSnackbar,
		animationClass,
	}
}
