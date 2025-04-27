import { Delete } from '../../assets/icons/common/Delete'
import styles from './order.module.css'

const Order = (props) => {
	return (
		<div className={styles.order}>
			<div className={styles.order__header}>
				<div className={styles['order__header-summary']}>
					<img
						alt={props.title}
						src={props.imageURL}
						className={styles.order__image}
					/>
					<div className={styles.order__summary}>
						<p title={props.title} className={styles.order__title}>
							{props.title}
						</p>
						<span className={styles.order__price}>
							{props.price}&nbsp;сом
						</span>
					</div>
				</div>
				<input
					min={1}
					max={10}
					type='number'
					id={props.price}
					defaultValue={1}
					className={styles.order__quantity}
				/>
				<span className={styles['order__total-price']}>
					{props.price}&nbsp;сом
				</span>
			</div>
			<div className={styles.order__footer}>
				<input
					type='text'
					id={props.title}
					className={styles.order__message}
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
