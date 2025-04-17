import clsx from 'clsx'
import React, { memo } from 'react'
import { ShoppingCart } from '../../assets/icons/common/ShoppingCart'
import { useBasketStore } from '../../store/basket'
import styles from './product.module.css'

const Product = memo((props) => {
	const addToBasket = useBasketStore((state) => state.addToBasket)

	return (
		<div className={clsx(styles['product'], { [styles.new]: props.isNew })}>
			<img
				loading='lazy'
				alt={props.title}
				src={props.imageURL}
				className={styles.product__image}
			/>
			<h4 title={props.title} className={styles['product__title']}>
				{props.title}
			</h4>
			<p
				title={props.description}
				className={styles['product__description']}
			>
				{props.description}
			</p>
			<span className={styles['product__price']}>
				от {props.price}&nbsp;сом
			</span>
			<button
				onClick={() => props.onOpen(props.slug)}
				className={`${styles['product__basket-btn']} btn`}
			>
				<ShoppingCart />
			</button>
			<div className={styles['product__actions']}></div>
		</div>
	)
})
Product.displayName = 'Product'
export default Product
