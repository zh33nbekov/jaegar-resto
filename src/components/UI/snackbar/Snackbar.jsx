import clsx from 'clsx'
import React, { memo } from 'react'
import { createPortal } from 'react-dom'
import { Close } from '../../../assets/icons/common/Close'
import styles from './snackbar.module.css'

export const Snackbar = memo(({ open, onClose, animationClass, options }) => {
	if (!open) return
	return (
		<>
			{createPortal(
				<div className={clsx(styles.snackbar, styles[animationClass])}>
					<div className={styles.snackbar__content}>
						<button onClick={onClose} className={styles.closeButton}>
							<Close style={{ width: '20px', height: '20px' }} />
						</button>
						<p className={styles.snackbar__message}>{options?.message}</p>
					</div>
				</div>,
				document.getElementById('snackbar')
			)}
		</>
	)
})

Snackbar.displayName = 'Snackbar'
