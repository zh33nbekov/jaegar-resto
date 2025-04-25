import { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '../../store/product-category'
import Product from '../product/Product'
import styles from './products-list.module.css'

const ProductsList = (props) => {
	const setActiveCategory = useCategoryStore(
		(state) => state.setActiveCategory
	)
	const productsListRef = useRef(null)
	const intersection = useIntersection(productsListRef, {
		rootMargin: '0px 0px -30% 0px',
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
			ref={productsListRef}
			className={styles['products-list']}
		>
			<h1 className={styles['products-list__category']}>{props.category}</h1>
			<div className={styles['products-list__wrapper']}>
				{props.products?.map((item) => (
					<Product
						key={item.title}
						slug={item.slug}
						price={item.price}
						isNew={item.isNew}
						title={item.title}
						onOpen={props.onOpen}
						onClose={props.onClose}
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
