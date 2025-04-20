import { useEffect, useState } from 'react'
import { Indicator } from '../UI/indicator/Indicator'
import { InteractiveButton } from '../UI/interactive-button/InteractiveButton'
import styles from './drink.module.css'

export const Drink = ({ volumes, onChangeVolume, selectedVolume, title }) => {
	const [active, setActive] = useState(0)
	const [position, setPosition] = useState({})

	useEffect(() => {
		const btn = document.getElementById(volumes[active].label)
		if (btn) {
			const styles = btn.getBoundingClientRect()
			setPosition({ width: styles.width, left: btn.offsetLeft })
		}
	}, [volumes, active])

	return (
		<>
			<h2 className={styles.product__title}>{title}</h2>
			<div className={styles.product__options}>
				{volumes.map((vol, index) => (
					<InteractiveButton
						key={index}
						index={index}
						id={vol.label}
						active={active}
						label={vol.label}
						position={position}
						onClick={(index) => {
							setActive(index)
							onChangeVolume(index)
						}}
						setPosition={setPosition}
						className={styles.product__size}
					>
						{vol.label} мл
					</InteractiveButton>
				))}
				<Indicator position={position} className={styles.indicator} />
			</div>
		</>
	)
}
