import React from 'react';
import DeleteIcon from '../../assets/icons/delete.svg';
import NewIcon from '../../assets/icons/new.svg';
import styles from './Orders.module.css';

const Order = ({
	onKeyDown,
	id,
	description,
	price,
	categories = [],
	imageURL,
	onDelete,
	isNew,
}) => {
	const drinkCategory = categories?.find((category) => category === 'напитки');

	return (
		<div className={styles.order}>
			{/* {isNew ? (
				<div className={styles.order__new}>
					<img className={styles.order__newImage} src={NewIcon} alt='' />
				</div>
			) : null} */}
			<div className={styles.order__header}>
				<div className={styles.order__headerSummary}>
					<img
						className={`${styles.order__image} ${
							drinkCategory ? styles.order__drinkImage : ''
						}`}
						src={imageURL}
						alt={description}
					/>
					<div className={styles.order__summary}>
						<p className={styles.order__description} title={description}>
							{description}
						</p>
						<span className={styles.order__price}>{price}&nbsp;сом</span>
					</div>
				</div>
				<input
					type='number'
					defaultValue={1}
					min={1}
					max={10}
					onKeyDown={onKeyDown}
					className={styles.order__quantity}
				/>
				<span className={styles.order__totalPrice}>{price}&nbsp;сом</span>
			</div>
			<div className={styles.order__footer}>
				<input
					className={styles.order__message}
					type='text'
					placeholder='Примечание к заказу...'
				/>
				<button
					className={styles.order__deleteButton}
					onClick={() => onDelete(id)}
				>
					<img src={DeleteIcon} alt='' />
				</button>
			</div>
		</div>
	);
};

export default Order;
