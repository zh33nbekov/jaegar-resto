import React, { useCallback, useState } from 'react'
import { Close } from '../../assets/icons/common/Close'
import { useBasketContext } from '../../context/basket/BasketContext'
import { useSidebar } from '../../hooks/useSidebar'
import { useSidebarStore } from '../../store/sidebar'
import OrderInfo from '../order-info/OrderInfo'
import OrderTypes from '../order-types/OrderTypes'
import Order from '../order/Order'
import Sidebar from '../side-bar/Sidebar'
import { Backdrop } from '../UI'
import styles from './orders.module.css'

const Orders = () => {
	// const [] = useState({
	// 	amount: 1,
	// 	note: '',
	// })
	const [isCheckedOrderType, setCheckedOrderType] = useState(null)
	const toggleOrderType = useCallback((id) => setCheckedOrderType(id), [])
	const { handleClose } = useSidebar()
	const sidebarStore = useSidebarStore()
	const dishBasketCtx = useBasketContext()
	const handleKeyDown = (event) => {
		if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
			event.preventDefault()
		}
	}
	const removeDishFromBasket = (id) => {
		dishBasketCtx.handleProductDelete(id)
	}

	return (
		<>
			<Backdrop
				onClose={handleClose}
				open={sidebarStore.open}
				animationClass={sidebarStore.animationClass}
			/>
			{sidebarStore.open && (
				<Sidebar
					open={sidebarStore.open}
					animationClass={sidebarStore.animationClass}
				>
					<div className={styles.orders}>
						<button
							onClick={handleClose}
							className={styles.orders__close}
						>
							<Close />
						</button>
						<span className={styles.orders__number}>Заказ #34562</span>
						<OrderTypes
							onToggleOrderType={toggleOrderType}
							checkedOrderType={isCheckedOrderType}
						/>
						<OrderInfo />
						<div className={styles.orders__wrapper}>
							{dishBasketCtx.basket?.map((elem) => (
								<Order
									key={elem.title}
									price={elem.price}
									isNew={elem.isNew}
									title={elem.title}
									imageURL={elem.imageURL}
									category={elem.category}
									onKeyDown={handleKeyDown}
									description={elem.description}
									onDelete={removeDishFromBasket}
								/>
							))}
							{!dishBasketCtx.basket && (
								<p className={styles.orders__infoMessage}>
									Ваша корзина пуста. <br /> Добавьте товары, чтобы
									продолжить покупки.
								</p>
							)}
						</div>
						{!dishBasketCtx.basket.length && (
							<div className={styles['basket-is-empty']}>
								<h4 className={styles['basket-is-empty__title']}>
									Здесь пока пусто
								</h4>
								<p className={styles['basket-is-empty__description']}>
									Добавьте что-то из блюд
								</p>
							</div>
						)}
						<div className={styles.orders__payment}>
							<div className={styles.orders__discount}>
								<span className={styles.orders__discountTitle}>
									Скидка
								</span>
								<span className={styles.orders__discountPrice}>
									{0}&nbsp;сом
								</span>
							</div>
							<div className={styles.orders__total}>
								<span className={styles.orders__totalTitle}>Итого</span>
								<span className={styles.orders__totalPrice}>
									{dishBasketCtx.totalAmount}&nbsp;сом
								</span>
							</div>
							<button className={styles.orders__paymentBtn}>
								Перейти к оплате
							</button>
						</div>
					</div>
				</Sidebar>
			)}
		</>
	)
}
export default Orders
