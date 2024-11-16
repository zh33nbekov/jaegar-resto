import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import styles from './Snackbar.module.css';

const Snackbar = ({ open, onClose, animationClass, options }) => {
	if (!open) {
		return null;
	}
	return (
		<>
			{createPortal(
				<div className={`${styles.snackbar} ${styles[animationClass]}`}>
					<div className={styles.snackbar__content}>
						<button onClick={onClose} className={styles.closeButton}>
							<CloseRoundedIcon
								style={{ width: '20px', height: '20px' }}
							/>
						</button>
						<p className={styles.snackbar__message}>{options?.message}</p>
					</div>
				</div>,
				document.getElementById('snackbar')
			)}
		</>
	);
};

export default memo(Snackbar);
