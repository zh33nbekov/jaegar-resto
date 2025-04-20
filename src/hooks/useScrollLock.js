import { useEffect } from 'react'

export const useScrollLock = (open) => {
	const lockScroll = () => {
		document.documentElement.style.overflow = 'hidden'
	}

	const unlockScroll = () => {
		document.documentElement.removeAttribute('style')
	}

	useEffect(() => {
		if (open) {
			lockScroll()
		} else {
			unlockScroll()
		}
	}, [open])

	return { lockScroll, unlockScroll }
}
