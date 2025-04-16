import clsx from 'clsx'
import { useState } from 'react'
import { getFinalPrice } from '../../../utils/products'
import { Backdrop } from '../backdrop/Backdrop'
import { Modal } from '../modal/Modal'
import styles from './product-modal.module.css'

export const ProductModal = ({ product, onClose }) => {
	const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)
	const selectedOption =
		product.options?.sizes?.[selectedSizeIndex] ??
		product.options?.volumes?.[selectedSizeIndex]
	const finalPrice = getFinalPrice(product.price, selectedOption)

	return (
		<>
			<Backdrop open={true} onClose={onClose} />
			<Modal open={true}>
				<div className={styles['product']}>
					<div className={clsx(styles['product__image-wrapper'])}>
						<img
							alt={product.title}
							src={product.imageURL}
							className={clsx(
								styles['product__image'],
								{
									[styles.small]:
										selectedSizeIndex === 0 && product.options?.sizes,
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
						<h2 className={styles.product__title}>{product.title}</h2>
						<p className={styles.product__description}>
							{product.description}
						</p>
						{product.options?.sizes && (
							<div className={styles['product__option-group']}>
								<div className={styles.product__options}>
									{product.options.sizes.map((size, index) => (
										<button
											key={size.label}
											className={clsx(styles.product__size, {
												[styles.active]:
													index === selectedSizeIndex,
											})}
											onClick={() => setSelectedSizeIndex(index)}
										>
											{size.size} см
										</button>
									))}
								</div>
							</div>
						)}
						{product.options?.volumes && (
							<div className={styles['product__option-group']}>
								<div className={styles.product__options}>
									{product.options.volumes.map((vol, index) => (
										<button
											key={vol.label}
											onClick={() => setSelectedSizeIndex(index)}
											className={clsx(styles.product__size, {
												[styles.active]:
													index === selectedSizeIndex,
											})}
										>
											{vol.label} мл
										</button>
									))}
								</div>
							</div>
						)}
						<p className={styles.product__price}>
							<strong>Цена:</strong> {finalPrice} ₽
						</p>
						<div className={styles.product__actions}>
							<button
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
