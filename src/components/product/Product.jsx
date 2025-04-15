import clsx from 'clsx'
import React, { memo } from 'react'
import { ShoppingCart } from '../../assets/icons/common/ShoppingCart'
import { useBasketStore } from '../../store/basket'
import styles from './product.module.css'

const Product = memo((props) => {
	const isDrink = props.category === 'напитки'
	const addToBasket = useBasketStore((state) => state.addToBasket)

	return (
		<div className={clsx(styles['product'], { [styles.new]: props.isNew })}>
			<img
				loading='lazy'
				alt={props.title}
				src={props.imageURL}
				className={clsx(styles['product__image'], {
					[styles.drink]: isDrink,
				})}
			/>
			<h4>{props.title}</h4>
			<p
				title={props.description}
				className={styles['product__description']}
			>
				{props.description}
			</p>
			<div className={styles['product__bottom']}>
				<span className={styles['product__price']}>
					от {props.price}&nbsp;сом
				</span>
			</div>
			<button
				onClick={() => addToBasket(props)}
				className={`${styles.product__button} btn`}
			>
				<ShoppingCart />
			</button>
		</div>
	)
})
Product.displayName = 'Product'
export default Product
