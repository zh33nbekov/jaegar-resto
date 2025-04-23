// import { createPortal } from 'react-dom'
// import styles from './spinner.module.css'

// export const Spinner = () => {
// 	return createPortal(
// 		<div className={styles.spinnerWrapper}>
// 			<div className={styles.spinner} />
// 		</div>,
// 		document.getElementById('spinner')
// 	)
// }

import { createPortal } from 'react-dom'
import styles from './spinner.module.css'

export const Spinner = () => {
	return createPortal(
		<div className={styles.spinnerWrapper}>
			<div className={styles.spinner} />
		</div>,
		document.getElementById('spinner')
	)
}
