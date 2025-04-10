import React, { useEffect, useState } from 'react'
import { AppLogo } from '../../../assets/icons/navbar'
import styles from './preloader.module.css'

export const Preloader = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const handlePageLoad = () => setIsLoading(false)
		if (document.readyState === 'complete') {
			handlePageLoad()
		} else {
			window.addEventListener('load', handlePageLoad)
			return () => document.removeEventListener('load', handlePageLoad)
		}
	}, [])

	if (!isLoading) return

	return (
		<div className={styles.preloader}>
			<AppLogo />
		</div>
	)
}
