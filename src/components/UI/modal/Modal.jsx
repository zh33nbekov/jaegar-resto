import clsx from 'clsx'
import React from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.css'

export const Modal = ({ children, open, animationClass }) => {
	if (!open) return

	return (
		<>
			{createPortal(
				<div
					className={clsx(styles.modal, {
						[styles[animationClass]]: animationClass,
					})}
				>
					{children}
				</div>,
				document.getElementById('modal')
			)}
		</>
	)
}
