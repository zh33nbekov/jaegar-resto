import React, { useCallback, useState } from 'react'
import { Close } from '../../assets/icons/common/Close'
import { useBasketContext } from '../../context/basket/BasketContext'
import { useSidebarContext } from '../../context/sidebar/SidebarContext'
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
	const sidebarContext = useSidebarContext()
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
				open={sidebarContext.sidebarVisible}
				onClose={sidebarContext.hideSidebar}
				animationClass={sidebarContext.sidebarAnimationClass}
			/>
			{sidebarContext.sidebarVisible && (
				<Sidebar
					open={sidebarContext.sidebarVisible}
					animationClass={sidebarContext.sidebarAnimationClass}
				>
					<div className={styles.orders}>
						<button
							onClick={sidebarContext.hideSidebar}
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
									key={elem.id}
									id={elem.id}
									description={elem.description}
									price={elem.price}
									categories={elem.categories}
									isNew={elem.isNew}
									imageURL={elem.imageURL}
									onKeyDown={handleKeyDown}
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
