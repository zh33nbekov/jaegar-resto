import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import clsx from 'clsx'
import { memo } from 'react'
import styles from './dishes-pagination.module.css'

const DishesPagination = memo((props) => {
	return (
		<div className={styles.pagination}>
			<button
				onClick={props.goToPreviousPage}
				disabled={props.currentPage === 1}
				className={clsx(styles.pagination__button, 'btn')}
			>
				<ChevronLeftRoundedIcon />
			</button>
			<span className={styles.pagination__page}>
				Страница {props.currentPage} из {props.totalPages}
			</span>
			<button
				onClick={props.goToNextPage}
				disabled={props.currentPage === props.totalPages}
				className={clsx(styles.pagination__button, 'btn')}
			>
				<ChevronRightRoundedIcon />
			</button>
		</div>
	)
})
DishesPagination.displayName = 'DishesPagination'
export default DishesPagination
