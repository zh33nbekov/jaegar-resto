import { useState } from 'react'

export const useScrollLock = () => {
	const [isScrollLocked, setScrollLocked] = useState(false)

	const lockScroll = () => {
		if (!isScrollLocked) {
			document.documentElement.style.overflow = 'hidden'
			setScrollLocked(true)
		}
	}

	const unlockScroll = () => {
		if (isScrollLocked) {
			document.documentElement.removeAttribute('style')
			setScrollLocked(false)
		}
	}

	return { lockScroll, unlockScroll }
}
