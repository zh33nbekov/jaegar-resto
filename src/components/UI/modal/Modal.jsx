import React, { memo } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ children, open, onClose, animationClass }) => {
	if (!open) {
		return null;
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
	);
};

export default memo(Modal);
