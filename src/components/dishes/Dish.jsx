import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import React from 'react';
import NewIcon from '../../assets/icons/new.svg';
import styles from './Dishes.module.css';

const Dish = ({
	id,
	description,
	price,
	info,
	isNew,
	categories,
	imageURL,
	onSetToBasket,
}) => {
	return (
		<div className={styles.dish}>
			{isNew ? (
				<div className={styles.dish__new}>
					<img className={styles.dish__newImage} src={NewIcon} alt='' />
				</div>
			) : null}
			<img className={styles.dish__image} src={imageURL} alt='Блюдо' />
			<p className={styles.dish__description} title={description}>
				{description}
			</p>
			<div className={styles.dish__bottom}>
				<span className={styles.dish__price}>{price}&nbsp;сом</span>
				<span className={styles.dish__info}>Доступно {info}</span>
			</div>
			<button
				className={`${styles.dish__button} btn`}
				onClick={onSetToBasket({
					id,
					description,
					price,
					categories,
					imageURL,
					isNew,
				})}
			>
				<ShoppingCartRoundedIcon />
			</button>
		</div>
	);
};

export default Dish;
