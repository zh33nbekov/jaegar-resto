import clsx from 'clsx'

import { createPortal } from 'react-dom'
import { Close } from '../../../assets/icons/common/Close'
import styles from './snackbar.module.css'

export const Snackbar = ({ open, onClose, animationClass, message }) => {
	if (!open) return
	return (
		<>
			{createPortal(
				<div className={clsx(styles.snackbar, styles[animationClass])}>
					<div className={styles.snackbar__content}>
						<button onClick={onClose} className={styles.closeButton}>
							<Close />
						</button>
						<p className={styles.snackbar__message}>{message}</p>
					</div>
				</div>,
				document.getElementById('snackbar')
			)}
		</>
	)
}
