import { useSearchParams } from 'react-router-dom'
import {
	MOCK_PRODUCTS,
	PRODUCT_CATEGORIES,
	PRODUCT_LIST,
} from '../../constants/products/products'
import { toSlug } from '../../utils/toSlug'
import ProductCategories from '../product-categories/ProductCategories'
import ProductsList from '../products-list/ProductsList'
import { ProductModal } from '../UI/product-modal/ProductModal'
import styles from './products.module.css'

const Products = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const selectedProductSlug = searchParams.get('product')

	const handleOpen = (product) => {
		setSearchParams({ product })
	}
	const handleClose = () => {
		searchParams.delete('product')
		setSearchParams(searchParams)
	}
	const product = MOCK_PRODUCTS.find(
		(p) => toSlug(p.slug) === selectedProductSlug
	)

	return (
		<>
			{product && <ProductModal onClose={handleClose} product={product} />}
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
