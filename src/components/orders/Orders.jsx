import CloseIcon from '@mui/icons-material/Close'
import clsx from 'clsx'
import React, { useCallback, useState } from 'react'
import { useDishBasketContext } from '../../context/dishes/DishBasketContext'
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
	const dishBasketCtx = useDishBasketContext()
	const handleKeyDown = (event) => {
		if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
			event.preventDefault()
		}
	}
	const removeDishFromBasket = (id) => {
		dishBasketCtx.handleDishDelete(id)
	}

	return (
		<>
			<Backdrop
				open={sidebarContext.sidebarVisible}
				onClose={sidebarContext.hideSidebar}
				animationClass={sidebarContext.sidebarAnimationClass}
			/>
			<Sidebar
				open={sidebarContext.sidebarVisible}
				animationClass={sidebarContext.sidebarAnimationClass}
			>
				<div className={styles.orders}>
					<button
						onClick={sidebarContext.hideSidebar}
						className={clsx(styles.orders__close)}
					>
						<CloseIcon />
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
						<button disabled={true} className={styles.orders__paymentBtn}>
							Перейти к оплате
						</button>
					</div>
				</div>
			</Sidebar>
		</>
	)
}
export default Orders
