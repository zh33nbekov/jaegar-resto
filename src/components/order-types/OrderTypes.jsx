import clsx from 'clsx'
import { memo } from 'react'
import styles from './order-types.module.css'

const orderTypeButtons = [
	{ title: 'Пообедать в' },
	{ title: 'Идти' },
	{ title: 'Доставка' },
]

const OrderTypes = memo((props) => {
	return (
		<div className={styles.orderTypes}>
			{orderTypeButtons.map((btn, index) => (
				<button
					key={index}
					onClick={() => props.onToggleOrderType(index)}
					className={clsx(styles.orderType, {
						[styles.active]: index === props.checkedOrderType,
					})}
				>
					{btn.title}
				</button>
			))}
		</div>
	)
})
OrderTypes.displayName = 'OrderTypes'
export default OrderTypes