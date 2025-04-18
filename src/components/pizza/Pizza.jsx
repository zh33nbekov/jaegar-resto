import clsx from 'clsx'
import styles from './pizza.module.css'

export const Pizza = (props) => {
	return (
		<>
			<h2 className={styles.product__title}>{props.title}</h2>
			<p className={styles.product__description}>{props.description}</p>
			{props.sizes && (
				<div className={styles['product__option-group']}>
					<div className={styles.product__options}>
						{props.sizes.map((size, index) => (
							<button
								key={size.label}
								className={clsx(styles.product__size, {
									[styles.active]: index === props.activeSize,
								})}
								onClick={() => props.onChangeSize(index)}
							>
								{size.size} см
							</button>
						))}
					</div>
				</div>
			)}
		</>
	)
}
