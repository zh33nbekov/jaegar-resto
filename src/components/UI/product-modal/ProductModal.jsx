import clsx from 'clsx'
import { useState } from 'react'
import { Backdrop } from '../backdrop/Backdrop'
import { Modal } from '../modal/Modal'
import styles from './product-modal.module.css'

export const ProductModal = ({ product, onClose }) => {
	const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)

	const basePrice = product.price
	const multiplier =
		product.options?.sizes?.[selectedSizeIndex]?.multiplier || 1
	const finalPrice = Math.round(basePrice * multiplier)

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
					<div className={styles['product__summary']}>
						<h2 className={styles['product__title']}>{product.title}</h2>
						<p className={styles['product__description']}>
							{product.description}
						</p>
						{product.options?.sizes && (
							<div className={styles.optionGroup}>
								<div className={styles.options}>
									{product.options.sizes.map((size, index) => (
										// <button
										// 	key={size.label}
										// 	onClick={() => setSelectedSizeIndex(index)}
										// 	className={
										// 		index === selectedSizeIndex
										// 			? styles.selected
										// 			: ''
										// 	}
										// >
										// 	{size.size}
										// </button>
										<button
											key={size.label}
											className={clsx(styles.sizeButton, {
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
						<p>
							<strong>Цена:</strong> {finalPrice} ₽
						</p>
						<button onClick={() => alert('Добавлено в корзину')}>
							Добавить в корзину
						</button>
						<button onClick={onClose}>Закрыть</button>
					</div>
				</div>
			</Modal>
		</>
	)
}
