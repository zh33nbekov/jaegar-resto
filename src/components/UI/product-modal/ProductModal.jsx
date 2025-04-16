// import { useState } from 'react'
// import { Backdrop } from '../backdrop/Backdrop'
// import { Modal } from '../modal/Modal'
// import styles from './product-modal.module.css'

// export const ProductModal = ({ product, onClose }) => {
// 	console.log(product)
// 	const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)

// 	const basePrice = product.price
// 	const multiplier =
// 		product.options?.sizes?.[selectedSizeIndex]?.multiplier || 1
// 	const finalPrice = Math.round(basePrice * multiplier)
// 	console.log(finalPrice)

// 	return (
// 		<>
// 			<Backdrop open={true} onClose={onClose} />
// 			<Modal open={true}>
// 				<div className={styles['product-modal']}>
// 					<img src={product.imageURL} alt='' />
// 					<h4>{product.title}</h4>
// 					<p>{product?.description}</p>
// 					<span>{product.price} сом</span>
// 				</div>
// 			</Modal>
// 		</>
// 	)
// }

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
				<div className={styles['product-modal']}>
					<img
						alt={product.title}
						src={product.imageURL}
						className={clsx(
							styles['product-image'],
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
					<div>
						<h2>{product.title}</h2>
						<p>{product.description}</p>
						{product.options?.sizes && (
							<div className={styles.optionGroup}>
								<label>Размер:</label>
								<div className={styles.options}>
									{product.options.sizes.map((size, index) => (
										<button
											key={size.label}
											onClick={() => setSelectedSizeIndex(index)}
											className={
												index === selectedSizeIndex
													? styles.selected
													: ''
											}
										>
											{size.size}
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
