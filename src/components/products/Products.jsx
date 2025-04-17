import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
	MOCK_PRODUCTS,
	PRODUCT_CATEGORIES,
	PRODUCT_LIST,
} from '../../constants/products/products'
import { toSlug } from '../../utils/products'
import ProductCategories from '../product-categories/ProductCategories'
import ProductsList from '../products-list/ProductsList'
import { ProductModal } from '../UI/product-modal/ProductModal'
import styles from './products.module.css'

const Products = () => {
	const [animate, setAnimate] = useState('')
	const [searchParams, setSearchParams] = useSearchParams()
	const selectedProductSlug = searchParams.get('product')
	const timeoutRef = useRef(null)

	const handleOpen = (product) => {
		setSearchParams({ product })
	}
	const handleClose = () => {
		setAnimate('closed')

		if (timeoutRef.current !== null) {
			clearTimeout(timeoutRef.current)
		}

		timeoutRef.current = setTimeout(() => {
			searchParams.delete('product')
			setSearchParams(searchParams)
			setAnimate('')
			timeoutRef.current = null
		}, 200)
	}
	const product = MOCK_PRODUCTS.find(
		(p) => toSlug(p.slug) === selectedProductSlug
	)

	return (
		<>
			{product && (
				<ProductModal
					animate={animate}
					product={product}
					onClose={handleClose}
				/>
			)}
			<section id='Продукты' className={styles.products}>
				<ProductCategories categories={PRODUCT_CATEGORIES} />
				{PRODUCT_CATEGORIES.map((category, index) => (
					<ProductsList
						key={category}
						category={category}
						products={PRODUCT_LIST[index].products}
						onOpen={handleOpen}
						onClose={handleClose}
					/>
				))}
			</section>
		</>
	)
}

export default Products
