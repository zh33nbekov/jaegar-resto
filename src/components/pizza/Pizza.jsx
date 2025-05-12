import { useEffect, useState } from 'react'
import styles from './pizza.module.css'
import { InteractiveButton } from '../UI/interactive-button/InteractiveButton'
import { Indicator } from '../UI/indicator/Indicator'

export const Pizza = (props) => {
	const [active, setActive] = useState(0)
	const [position, setPosition] = useState({})

	useEffect(() => {
		const btn = document.getElementById(props.sizes[active]?.size)
		if (btn) {
			const styles = btn.getBoundingClientRect()
			setPosition({ width: styles.width, left: btn.offsetLeft })
		}
	}, [props.sizes, active])

	return (
		<>
			<h2 className={styles.product__title}>{props.title}</h2>
			<p className={styles.product__description}>{props.description}</p>
			{props.sizes && (
				<div className={styles['product__option-group']}>
					<div className={styles.product__options}>
						{props.sizes.map((size, index) => {
							return (
								<InteractiveButton
									key={index}
									index={index}
									id={size.size}
									active={active}
									label={size.size}
									position={position}
									onClick={(index) => {
										setActive(index)
										props.onChangeSize(index)
									}}
									setPosition={setPosition}
									className={styles.product__size}
								>
									{size.size} см
								</InteractiveButton>
							)
						})}
						<Indicator position={position} className={styles.indicator} />
					</div>
				</div>
			)}
		</>
	)
}
