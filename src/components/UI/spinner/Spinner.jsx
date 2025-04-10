import { useEffect, useState } from 'react'
import styles from './spinner.module.css'

export const Spinner = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		console.log('mount')
		return () => console.log('didmount')
	}, [])

	return (
		<div className={styles.spinnerWrapper}>
			<div className={styles.spinner} />
		</div>
	)
}
