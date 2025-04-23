import React, { memo } from 'react'
import styles from './sidebar.module.css'

export const Sidebar = memo(({ open, children, animationClass }) => {
	if (!open) return

	return (
		<aside className={`${styles.sidebar} ${styles[animationClass]}`}>
			{children}
		</aside>
	)
})

Sidebar.displayName = 'Sidebar'
