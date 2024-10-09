import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_KEYS } from '../../constants/common/RouteKeys';
import { useDishBasketContext } from '../../context/dishes/DishBasketContext';
import { useNavigationContext } from '../../context/navigation/NavigationContext';
import Sidebar from '../side-bar/Sidebar';
import Order from './Order';
import styles from './Orders.module.css';

const Orders = () => {
	const navigate = useNavigate();
	const navCtx = useNavigationContext();

	const dishBasketCtx = useDishBasketContext();
	const totalAmount = dishBasketCtx.calculateTotalAmount();
	const orderTypeButtons = [
		{
			id: 0,
			title: 'Пообедать в',
		},
		{
			id: 1,
			title: 'Идти',
		},
		{
			id: 2,
			title: 'Доставка',
		},
	];
	const disabledBasketButton = !dishBasketCtx.basket.length
		? 'orders__paymentDisabledButton'
		: '';
	const renderBasketDishes = () => {
		return dishBasketCtx.basket.length ? (
			dishBasketCtx.basket.map((elem) => (
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
			))
		) : (
			<p className={styles.orders__infoMessage}>
				Ваша корзина пуста. <br /> Добавьте товары, чтобы продолжить
				покупки.
			</p>
		);
	};
	const handleKeyDown = (event) => {
		if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
			event.preventDefault();
		}
	};
	const removeDishFromBasket = (id) => {
		dishBasketCtx.removeFromBasket(id);
	};
	const navigateToPaymentPage = () => navigate(ROUTE_KEYS.PAYMENT);

	return (
		<Sidebar
			open={navCtx.isSideBarVisible}
			animationClass={navCtx.sideBarAnimationClass}
		>
			<div className={styles.orders}>
				<button
					className={`${styles.orders__close} btn`}
					onClick={navCtx.hideNavigation}
				>
					<CloseIcon />
				</button>
				<span className={styles.orders__number}>Заказ #34562</span>
				<div className={styles.orders__buttonsGroup}>
					{orderTypeButtons.map((button, index) => (
						<button key={button.id} className={styles.orders__buttonType}>
							{button.title}
						</button>
					))}
				</div>
				<div className={styles.orders__info}>
					<ul className={styles.orders__infoHeader}>
						<li className={styles.orders__infoItem}>Выбраны</li>
						<li className={styles.orders__infoItem}>Кол.</li>
						<li className={styles.orders__infoItem}>Цена</li>
					</ul>
				</div>
				<div className={styles.orders__wrapper}>{renderBasketDishes()}</div>
				<div className={styles.orders__payment}>
					<div className={styles.orders__discount}>
						<span className={styles.orders__discountTitle}>Скидка</span>
						<span className={styles.orders__discountPrice}>
							{0}&nbsp;сом
						</span>
					</div>
					<div className={styles.orders__total}>
						<span className={styles.orders__totalTitle}>Итого</span>
						<span className={styles.orders__totalPrice}>
							{totalAmount}&nbsp;сом
						</span>
					</div>
					<button
						className={`${styles.orders__paymentButton} btn ${
							disabledBasketButton ? 'disabled' : ''
						}`}
						disabled={!dishBasketCtx.basket.length}
						onClick={navigateToPaymentPage}
					>
						Перейти к оплате
					</button>
				</div>
			</div>
		</Sidebar>
	);
};

export default Orders;
