import clsx from 'clsx'
import { memo } from 'react'
import { Next } from '../../assets/icons/common/Next'
import { Prev } from '../../assets/icons/common/Prev'
import styles from './dishes-pagination.module.css'

const DishesPagination = memo((props) => {
	return (
		<div className={styles.pagination}>
			<button
				onClick={props.goToPreviousPage}
				disabled={props.currentPage === 1}
				className={clsx(styles.pagination__button, 'btn')}
			>
				<Prev />
			</button>
			<span className={styles.pagination__page}>
				Страница {props.currentPage} из {props.totalPages}
			</span>
			<button
				onClick={props.goToNextPage}
				disabled={props.currentPage === props.totalPages}
				className={clsx(styles.pagination__button, 'btn')}
			>
				<Next />
			</button>
		</div>
	)
})
DishesPagination.displayName = 'DishesPagination'
export default DishesPagination
