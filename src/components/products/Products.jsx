import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
	PRODUCT_CATEGORIES,
	PRODUCT_LIST,
} from '../../constants/products/products'
import ProductCategories from '../product-categories/ProductCategories'
import ProductsList from '../products-list/ProductsList'
import { ProductModal } from '../UI/product-modal/ProductModal'
import styles from './products.module.css'

const Products = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [open, setOpen] = useState(false)

	const handleOpen = (product) => {
		setOpen(true)
		setSearchParams({ product })
	}

	const handleClose = () => {
		setOpen(false)
		searchParams.delete('product')
		setSearchParams(searchParams)
	}

	return (
		<>
			<ProductModal open={open} onClose={handleClose} />
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
