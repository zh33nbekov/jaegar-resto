import clsx from 'clsx'
import styles from './drink.module.css'

export const Drink = ({ volumes, onChangeVolume, selectedVolume, title }) => {
	return (
		<>
			<h2 className={styles.product__title}>{title}</h2>
			<div className={styles.product__options}>
				{volumes.map((vol, index) => (
					<button
						key={vol.label}
						onClick={() => onChangeVolume(index)}
						className={clsx(styles.product__size, {
							[styles.active]: index === selectedVolume,
						})}
					>
						{vol.label} мл
					</button>
				))}
			</div>
		</>
	)
}
