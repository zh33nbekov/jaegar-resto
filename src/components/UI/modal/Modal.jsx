import React from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.css'

export const Modal = ({ children, open, onClose, animationClass }) => {
	if (!open) {
		return null
	}

	return (
		<>
			{createPortal(
				<div className={`${styles.modal} ${styles[animationClass]}`}>
					{children}
				</div>,
				document.getElementById('modal')
			)}
		</>
	)
}
