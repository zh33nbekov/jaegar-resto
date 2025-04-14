import clsx from 'clsx'
import React from 'react'
import styles from './product-categories.module.css'

const ProductCategories = (props) => {
	return (
		<ul className={styles['product-categories']}>
			{props.categories.map((category, index) => (
				<li
					key={category}
					className={clsx(styles['product-category'], {
						[styles.active]: props.activeDishType === index,
					})}
				>
					<a
						href={`#${category}`}
						className={styles['product-category__link']}
					>
						{category}
					</a>
				</li>
			))}
		</ul>
	)
}

ProductCategories.displayName = 'ProductCategories'
export default ProductCategories
