import { memo } from 'react'
import styles from './order-info.module.css'

const OrderInfo = memo(() => {
	return (
		<div className={styles.info}>
			<ul className={styles.info__header}>
				<li className={styles.info__item}>Выбраны</li>
				<li className={styles.info__item}>Кол.</li>
				<li className={styles.info__item}>Цена</li>
			</ul>
		</div>
	)
})
OrderInfo.displayName = 'OrderInfo'
export default OrderInfo
