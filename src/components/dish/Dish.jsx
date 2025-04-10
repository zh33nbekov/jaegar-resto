import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import React, { memo } from 'react'
import NewIcon from '../../assets/icons/new.svg'
import styles from './dish.module.css'

const Dish = memo((props) => {
	const handleSetToBasket = () => {
		const basketDish = {
			id: props.id,
			description: props.description,
			price: props.price,
			categories: props.categories,
			imageURL: props.imageURL,
			isNew: props.isNew,
		}
		props.onSetToBasket(basketDish)
	}

	return (
		<div className={styles.dish}>
			{props.isNew && (
				<div className={styles.dish__new}>
					<img className={styles.dish__newImage} src={NewIcon} alt='' />
				</div>
			)}
			<img className={styles.dish__image} src={props.imageURL} alt='Блюдо' />
			<p className={styles.dish__description} title={props.description}>
				{props.description}
			</p>
			<div className={styles.dish__bottom}>
				<span className={styles.dish__price}>{props.price}&nbsp;сом</span>
				<span className={styles.dish__info}>Доступно {props.info}</span>
			</div>
			<button
				className={`${styles.dish__button} btn`}
				onClick={handleSetToBasket}
			>
				<ShoppingCartRoundedIcon />
			</button>
		</div>
	)
})

Dish.displayName = 'Dish'
export default Dish
