import clsx from 'clsx'
import React from 'react'
import { createPortal } from 'react-dom'
import { useScrollLock } from '../../../hooks'
import styles from './backdrop.module.css'

export const Backdrop = ({ open, onClose, animationClass }) => {
	const { lockScroll, unlockScroll } = useScrollLock()
	if (open) {
		lockScroll()
	} else {
		unlockScroll()
		return
	}

	return (
		<>
			{createPortal(
				<div
					onClick={onClose}
					className={clsx(styles.backdrop, styles[animationClass])}
				/>,
				document.getElementById('backdrop')
			)}
		</>
	)
}
