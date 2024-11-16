import React, { memo } from 'react';
import EditIcon from '../../../../assets/icons/edit.svg';
import styles from './ManagementDishCard.module.css';

const ManagementDishCard = ({
	id,
	description,
	price,
	info,
	imageURL,
	onOpen,
	categories,
}) => {
	return (
		<div className={styles.dish}>
			<div className={styles.dish__header}>
				<img
					className={styles.dish__image}
					src={imageURL}
					alt={description}
				/>
				<p className={styles.dish__description} title={description}>
					{description}
				</p>
				<div className={styles.dish__info}>
					<span className={styles.dish__price}>{price}&nbsp;сом</span>
					&nbsp;&bull;&nbsp;
					<span className={styles.dish__subinfo}>
						Доступно&nbsp;{info}
					</span>
				</div>
			</div>
			<button
				className={styles.dish__editButton}
				onClick={() =>
					onOpen({ id, description, info, price, imageURL, categories })
				}
			>
				<img src={EditIcon} alt='' />
				<span>Изменить</span>
			</button>
		</div>
	);
};

export default memo(ManagementDishCard);
