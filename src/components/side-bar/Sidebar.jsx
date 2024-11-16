import React, { memo } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ open, children, animationClass }) => {
	if (!open) {
		return null;
	}
	return (
		<aside className={`${styles.sidebar} ${styles[animationClass]}`}>
			{children}
		</aside>
	);
};

export default memo(Sidebar);
