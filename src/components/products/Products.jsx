import { lazy, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
	MOCK_PRODUCTS,
	PRODUCT_CATEGORIES,
	PRODUCT_LIST,
} from '../../constants/products/products'
import { withLazy } from '../../HOC/withLazy'
import { useScrollLock } from '../../hooks/useScrollLock'
import { useSnackbar } from '../../hooks/useSnackbar'
import { useBasketStore } from '../../store/basket'
import { toSlug } from '../../utils/products'
import ProductCategories from '../product-categories/ProductCategories'
import ProductsList from '../products-list/ProductsList'
import { Snackbar } from '../UI/snackbar/Snackbar'

const LazyProductModal = lazy(() => import('../product-modal/ProductModal'))
const ProductModal = withLazy(LazyProductModal)

const Products = () => {
	const [animate, setAnimate] = useState('')
	const [searchParams, setSearchParams] = useSearchParams()
	const addToBasket = useBasketStore((state) => state.addToBasket)
	const { open, animationClass, message, showSnackbar, hideSnackbar } =
		useSnackbar()
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

	const handleAddToBasket = (product) => {
		addToBasket(product)
		showSnackbar(`${product.title} добавлен в корзину`)
	}
	useScrollLock(Boolean(product))

	return (
		<>
			<Snackbar
				open={open}
				message={message}
				onClose={hideSnackbar}
				animationClass={animationClass}
			/>
			{product && (
				<ProductModal
					animate={animate}
					product={product}
					onClose={handleClose}
					onAddToBasket={handleAddToBasket}
				/>
			)}
			<section id='Меню'>
				<ProductCategories categories={PRODUCT_CATEGORIES} />
				{PRODUCT_CATEGORIES.map((category, index) => (
					<ProductsList
						key={category}
						category={category}
						onOpen={handleOpen}
						onClose={handleClose}
						products={PRODUCT_LIST[index]?.products}
					/>
				))}
			</section>
		</>
	)
}

export default Products
