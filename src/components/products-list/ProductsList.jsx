import React, { useEffect } from 'react'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '../../store/useCategory'
import Product from '../product/Product'
import styles from './products-list.module.css'

const ProductsList = (props) => {
	const setActiveCategory = useCategoryStore(
		(state) => state.setActiveCategory
	)
	const intersectionRef = React.useRef(null)
	const intersection = useIntersection(intersectionRef, {
		rootMargin: '0px 0px -60% 0px',
		threshold: 0.1,
	})
	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategory(intersectionRef.current.id)
		}
	}, [intersection?.isIntersecting, setActiveCategory])

	return (
		<div
			id={props.category}
			className={styles['products-list']}
			ref={intersectionRef}
		>
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
