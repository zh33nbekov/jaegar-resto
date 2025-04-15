import React, { useEffect } from 'react'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '../../store/product-category'
import Product from '../product/Product'
import styles from './products-list.module.css'

const ProductsList = (props) => {
	const setActiveCategory = useCategoryStore(
		(state) => state.setActiveCategory
	)
	const productsListRef = React.useRef(null)
	const intersection = useIntersection(productsListRef, {
		rootMargin: '0px 0px -60% 0px',
		threshold: 0.1,
	})
	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategory(productsListRef.current.id)
		}
	}, [intersection?.isIntersecting, setActiveCategory])

	return (
		<div
			id={props.category}
			className={styles['products-list']}
			ref={productsListRef}
		>
			<h4 className={styles['products-list__title']}>{props.category}</h4>
			<div className={styles['products-list__wrapper']}>
				{props.items.map((item) => (
					<Product
						key={item.title}
						price={item.price}
						isNew={item.isNew}
						title={item.title}
						imageURL={item.imageURL}
						category={props.category}
						description={item.description}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductsList
