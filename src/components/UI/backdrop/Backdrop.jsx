import clsx from 'clsx'

import { createPortal } from 'react-dom'
import styles from './backdrop.module.css'

export const Backdrop = ({ open, onClose, animationClass, zIndex }) => {
	if (!open) return

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
