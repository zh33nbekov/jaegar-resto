import React from 'react'
import Product from '../product/Product'
import styles from './products-list.module.css'

const ProductsList = (props) => {
	return (
		<div className={styles['products-list']} id={props.category}>
			<h4 className={styles['products-list__title']}>{props.category}</h4>
			<div className={styles['products-list__wrapper']}>
				{props.items.map((item) => (
					<Product
						key={item.id}
						price={item.price}
						info={item.info}
						isNew={item.isNew}
						imageURL={item.imageURL}
						description={item.description}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductsList
