import clsx from 'clsx'
import React, { memo } from 'react'
import { ShoppingCart } from '../../assets/icons/common/ShoppingCart'
import { useBasketContext } from '../../context/basket/BasketContext'
import styles from './product.module.css'

const Product = memo((props) => {
	const isDrink = props.category === 'напитки'
	const basketContext = useBasketContext()

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
				onClick={() => basketContext.addProductToBasket(props)}
				className={`${styles.product__button} btn`}
			>
				<ShoppingCart />
			</button>
		</div>
	)
})
Product.displayName = 'Product'
export default Product
