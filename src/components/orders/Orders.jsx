import { useCallback, useState } from 'react'
import { Close } from '../../assets/icons/common/Close'
import { useSidebar } from '../../hooks/useSidebar'
import { useBasketStore } from '../../store/basket'
import { useSidebarStore } from '../../store/sidebar'
import OrderInfo from '../order-info/OrderInfo'
import OrderTypes from '../order-types/OrderTypes'
import Order from '../order/Order'
import { OrdersEmpty } from '../orders-empty/OrdersEmpty'
import { Sidebar } from '../side-bar/Sidebar'
import { Backdrop } from '../UI/backdrop/Backdrop'
import styles from './orders.module.css'

const Orders = () => {
	const [isCheckedOrderType, setCheckedOrderType] = useState(null)
	const toggleOrderType = useCallback((id) => setCheckedOrderType(id), [])
	const { handleClose } = useSidebar()
	const sidebarStore = useSidebarStore()
	const basket = useBasketStore((state) => state.items)
	const removeFromBasket = useBasketStore((state) => state.removeFromBasket)
	const handleDelete = (title) => {
		removeFromBasket(title)
	}

	const totalAmount = basket.reduce((acc, elem) => {
		return (acc += elem.price)
	}, 0)

	return (
		<>
			<Backdrop
				onClose={handleClose}
				open={sidebarStore.open}
				animationClass={sidebarStore.animationClass}
			/>
			<Sidebar
				open={sidebarStore.open}
				animationClass={sidebarStore.animationClass}
			>
				<div className={styles.orders}>
					<button onClick={handleClose} className={styles.orders__close}>
						<Close />
					</button>
					<span className={styles.orders__number}>Заказ #34562</span>
					<OrderTypes
						onToggleOrderType={toggleOrderType}
						checkedOrderType={isCheckedOrderType}
					/>
					<OrderInfo />
					<div className={styles.orders__wrapper}>
						{basket?.map((elem) => (
							<Order
								key={elem.title}
								price={elem.price}
								isNew={elem.isNew}
								title={elem.title}
								onDelete={handleDelete}
								imageURL={elem.imageURL}
								category={elem.category}
								description={elem.description}
							/>
						))}
					</div>
					{!basket.length && <OrdersEmpty />}
					<div className={styles.orders__payment}>
						<div className={styles.orders__discount}>
							<span className={styles['orders__discount-title']}>
								Скидка
							</span>
							<span className={styles['orders__discount-price']}>
								{0}&nbsp;сом
							</span>
						</div>
						<div className={styles.orders__total}>
							<span className={styles['orders__total-title']}>
								Итого
							</span>
							<span className={styles['orders__total-price']}>
								{totalAmount}&nbsp;сом
							</span>
						</div>
						<button className={styles['orders__payment-btn']}>
							Перейти к оплате
						</button>
					</div>
				</div>
			</Sidebar>
		</>
	)
}
export default Orders
