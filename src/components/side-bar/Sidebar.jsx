import React from 'react'
import styles from './sidebar.module.css'

export const Sidebar = ({ open, children, animationClass }) => {
	if (!open) return

	return (
		<aside className={`${styles.sidebar} ${styles[animationClass]}`}>
			{children}
		</aside>
	)
}
