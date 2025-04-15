import clsx from 'clsx'
import React from 'react'
import { ShoppingCart } from '../../assets/icons/common/ShoppingCart'
import styles from './product.module.css'

const Product = (props) => {
	return (
		<div className={clsx(styles['product'], { [styles.new]: props.isNew })}>
			<img
				loading='lazy'
				alt={props.title}
				src={props.imageURL}
				className={styles['product__image']}
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
			<button onClick={() => {}} className={`${styles.product__button} btn`}>
				<ShoppingCart />
			</button>
		</div>
	)
}

export default Product
