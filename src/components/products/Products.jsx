import {
	PRODUCT_CATEGORIES,
	PRODUCT_LIST,
} from '../../constants/products/products'
import ProductCategories from '../product-categories/ProductCategories'
import ProductsList from '../products-list/ProductsList'
import styles from './products.module.css'

const Products = () => {
	return (
		<section className={styles.products}>
			<ProductCategories categories={PRODUCT_CATEGORIES} />
			{PRODUCT_CATEGORIES.map((category, index) => (
				<ProductsList
					key={category}
					category={category}
					items={PRODUCT_LIST[index].products}
				/>
			))}
		</section>
	)
}

export default Products
