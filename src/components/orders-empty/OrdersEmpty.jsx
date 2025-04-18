import styles from './orders-empty.module.css'

export const OrdersEmpty = () => {
	return (
		<div className={styles['orders-empty']}>
			<h4 className={styles['orders-empty__title']}>Ваша корзина пуста.</h4>
			<p className={styles['orders-empty__description']}>
				Добавьте товары, чтобы продолжить покупки.
			</p>
		</div>
	)
}
