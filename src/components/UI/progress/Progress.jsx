import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './progress.module.css'

export const Progress = () => {
	const progress = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			const windowHeight = window.innerHeight
			const documentHeight = document.documentElement.scrollHeight
			const scrollPercent = Math.floor(
				(scrollTop / (documentHeight - windowHeight)) * 100
			)
			progress.current.style.width = `${scrollPercent}%`
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return createPortal(
		<div ref={progress} className={styles.progress} />,
		document.getElementById('progress')
	)
}
