import clsx from 'clsx'
import { useState } from 'react'
import { getFinalPrice } from '../../utils/products'
import { Drink } from '../drink/Drink'
import { Other } from '../other/Other'
import { Pizza } from '../pizza/Pizza'
import { Backdrop } from '../UI/backdrop/Backdrop'
import { Modal } from '../UI/modal/Modal'
import styles from './product-modal.module.css'

const otherProducts = {
	пиццы: 'пиццы',
	напитки: 'напитки',
}

export const ProductModal = ({ product, onAddToBasket, onClose, animate }) => {
	const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)
	const selectedOption =
		product.options?.sizes?.[selectedSizeIndex] ??
		product.options?.volumes?.[selectedSizeIndex]
	const finalPrice = getFinalPrice(product?.price, selectedOption)
	const handleSelectedSizeIndex = (index) => {
		setSelectedSizeIndex(index)
	}
	const transferProductForBasket = () => {
		const { isNew, options, slug, ...rest } = product
		return { ...rest, options: selectedOption }
	}
	const isPizza = product.category === 'пиццы'
	const isDrink = product.category === 'напитки'
	const otherProduct = !otherProducts[product.category]

	return (
		<>
			<Backdrop open={true} onClose={onClose} animationClass={animate} />
			<Modal open={true} animationClass={animate}>
				<div className={styles['product']}>
					<div className={clsx(styles['product__image-wrapper'])}>
						<img
							alt={product.title}
							src={product.imageURL}
							className={clsx(
								styles['product__image'],
								{
									[styles.small]: selectedSizeIndex === 0,
								},
								{
									[styles.medium]: selectedSizeIndex === 1,
								},
								{
									[styles.big]: selectedSizeIndex === 2,
								}
							)}
						/>
					</div>
					<div className={styles.product__summary}>
						{isPizza && (
							<Pizza
								title={product.title}
								sizes={product.options.sizes}
								activeSize={selectedSizeIndex}
								description={product.description}
								onChangeSize={handleSelectedSizeIndex}
							/>
						)}
						{isDrink && (
							<Drink
								title={product.title}
								volumes={product.options.volumes}
								selectedVolume={selectedSizeIndex}
								onChangeVolume={handleSelectedSizeIndex}
							/>
						)}
						{otherProduct && (
							<Other
								title={product.title}
								description={product.description}
							/>
						)}
						<p className={styles.product__price}>
							<strong>Цена:</strong> {finalPrice} ₽
						</p>
						<div className={styles.product__actions}>
							<button
								onClick={() =>
									onAddToBasket(transferProductForBasket())
								}
								className={clsx(styles['product__add-basket'], 'btn')}
							>
								Добавить в корзину
							</button>
							<button
								onClick={onClose}
								className={styles['product__close-button']}
							>
								Закрыть
							</button>
						</div>
					</div>
				</div>
			</Modal>
		</>
	)
}
