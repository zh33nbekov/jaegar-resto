import clsx from 'clsx'
import React from 'react'
import { createPortal } from 'react-dom'
import { useScrollLock } from '../../../hooks/useScrollLock'
import styles from './backdrop.module.css'

export const Backdrop = ({ open, onClose, animationClass, zIndex }) => {
	const { lockScroll, unlockScroll } = useScrollLock()
	if (open) {
		// lockScroll()
	} else {
		// unlockScroll()
		return
	}

	return (
		<>
			{createPortal(
				<div
					onClick={onClose}
					className={clsx(styles.backdrop, styles[animationClass])}
					style={{ zIndex: zIndex }}
				/>,
				document.getElementById('backdrop')
			)}
		</>
	)
}
