import clsx from 'clsx'
import React from 'react'
import { ShoppingCart } from '../../assets/icons/common/ShoppingCart'
import styles from './product.module.css'

const Product = ({ isNew, imageURL, description, price, info }) => {
	return (
		<div className={clsx(styles['product'], { [styles.new]: isNew })}>
			<img className={styles['product__image']} src={imageURL} alt='Блюдо' />
			<p className={styles['product__description']} title={description}>
				{description}
			</p>
			<div className={styles['product__bottom']}>
				<span className={styles['product__price']}>{price}&nbsp;сом</span>
				<span className={styles.product__info}>Доступно {info}</span>
			</div>
			<button onClick={() => {}} className={`${styles.product__button} btn`}>
				<ShoppingCart />
			</button>
		</div>
	)
}

export default Product
