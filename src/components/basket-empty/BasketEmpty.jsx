import styles from './basket-empty.module.css'

export const BasketEmpty = () => {
	return (
		<div className={styles['basket-empty']}>
			<h4 className={styles['basket-empty__title']}>Ваша корзина пуста.</h4>
			<p className={styles['basket-empty__description']}>
				Добавьте товары, чтобы продолжить покупки.
			</p>
		</div>
	)
}
