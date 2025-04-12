import clsx from 'clsx'
import React, { memo } from 'react'
import { ShoppingCart } from '../../assets/icons/common/ShoppingCart'
import styles from './dish.module.css'

const Dish = memo((props) => {
	const handleSetToBasket = () => {
		const basketDish = {
			id: props.id,
			price: props.price,
			isNew: props.isNew,
			imageURL: props.imageURL,
			categories: props.categories,
			description: props.description,
		}
		props.onAddToBasket(basketDish)
	}

	return (
		<div className={clsx(styles.dish, { [styles.new]: props.isNew })}>
			<img className={styles.dish__image} src={props.imageURL} alt='Блюдо' />
			<p className={styles.dish__description} title={props.description}>
				{props.description}
			</p>
			<div className={styles.dish__bottom}>
				<span className={styles.dish__price}>{props.price}&nbsp;сом</span>
				<span className={styles.dish__info}>Доступно {props.info}</span>
			</div>
			<button
				onClick={handleSetToBasket}
				className={`${styles.dish__button} btn`}
			>
				<ShoppingCart />
			</button>
		</div>
	)
})

Dish.displayName = 'Dish'
export default Dish
