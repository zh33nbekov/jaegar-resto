import React from 'react'
import { Delete } from '../../assets/icons/common/Delete'
import styles from './order.module.css'

const Order = (props) => {
	return (
		<div className={styles.order}>
			<div className={styles.order__header}>
				<div className={styles['order__header-summary']}>
					<img
						src={props.imageURL}
						alt={props.title}
						className={styles.order__image}
					/>
					<div className={styles.order__summary}>
						<p className={styles.order__title} title={props.title}>
							{props.title}
						</p>
						<span className={styles.order__price}>
							{props.price}&nbsp;сом
						</span>
					</div>
				</div>
				<input
					type='number'
					defaultValue={1}
					min={1}
					max={10}
					onKeyDown={props.onKeyDown}
					className={styles.order__quantity}
				/>
				<span className={styles['order__total-price']}>
					{props.price}&nbsp;сом
				</span>
			</div>
			<div className={styles.order__footer}>
				<input
					className={styles.order__message}
					type='text'
					placeholder='Примечание к заказу...'
				/>
				<button
					className={styles['order__delete-button']}
					onClick={() => props.onDelete(props.title)}
				>
					<Delete />
				</button>
			</div>
		</div>
	)
}
export default Order
