import clsx from 'clsx'
import { memo, useEffect, useState } from 'react'
import { Indicator } from '../UI/indicator/Indicator'
import { InteractiveButton } from '../UI/interactive-button/InteractiveButton'
import styles from './order-types.module.css'

const ORDER_TYPE_OPTIONS = [
	{ title: 'У нас' },
	{ title: 'У себя' },
]

const OrderTypes = memo((props) => {
	const [active, setActive] = useState(0)
	const [position, setPosition] = useState({})
	const handleClick = (index) => {
		setActive(index)
		props.onToggleOrderType(index)
	}
	useEffect(() => {
		const btn = document.getElementById(ORDER_TYPE_OPTIONS[active]?.title)
		if (btn) {
			const styles = btn.getBoundingClientRect()
			setPosition({ width: styles.width, left: btn.offsetLeft })
		}
	}, [props.sizes, active])

	return (
		<div className={styles.orderTypes}>
			{ORDER_TYPE_OPTIONS.map((btn, index) => (
				<InteractiveButton
					index={index}
					id={btn.title}
					key={btn.title}
					active={active}
					label={btn.title}
					position={position}
					onClick={handleClick}
					className={clsx(styles.orderType, {
						[styles.active]: index === active,
					})}
				>
					{btn.title}
				</InteractiveButton>
			))}
			<Indicator position={position} className={styles.indicator} />
		</div>
	)
})

OrderTypes.displayName = 'OrderTypes'
export default OrderTypes
