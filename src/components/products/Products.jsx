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

	const handleOpen = (product) => {
		setSearchParams({ product })
	}
	const handleClose = () => {
		searchParams.delete('product')
		setSearchParams(searchParams)
	}
	const isModalOpen = searchParams.get('product')

	return (
		<>
			<ProductModal open={isModalOpen} onClose={handleClose} />
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
