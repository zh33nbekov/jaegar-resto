import clsx from 'clsx'
import React from 'react'
import { useCategoryStore } from '../../store/use'
import styles from './product-categories.module.css'

const ProductCategories = (props) => {
	const activeCategory = useCategoryStore((state) => state.activeCategory)
	console.log(activeCategory)
	return (
		<ul className={styles['product-categories']}>
			{props.categories.map((category) => (
				<li
					key={category}
					className={clsx(styles['product-category'], {
						[styles.active]: category === activeCategory,
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
