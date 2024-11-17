import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '../../assets/icons/dashboard.svg';
import DiscountIcon from '../../assets/icons/discount.svg';
import HomeIcon from '../../assets/icons/home.svg';
import AppLogo from '../../assets/icons/logo.svg';
import MessageIcon from '../../assets/icons/message.svg';
import NotificationIcon from '../../assets/icons/notification.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import { ROUTE_KEYS } from '../../constants/common/RouteKeys';
import { useDishBasketContext } from '../../context/dishes/DishBasketContext';
import { useNavigationContext } from '../../context/navigation/NavigationContext';
import styles from './Navbar.module.css';

const Navbar = () => {
	const { basketLength } = useDishBasketContext();
	const navCtx = useNavigationContext();

	const checkActiveLink = ({ isActive }) => {
		return isActive ? 'navigation__linkActive' : '';
	};

	return (
		<>
			<nav className={styles.navigation}>
				<ul className={styles.navigation__list}>
					<li className={`${styles.navigation__item} ${styles.appLogo}`}>
						<NavLink
							to={ROUTE_KEYS.HOME}
							className={styles.navigation__link}
						>
							<img src={AppLogo} alt='Jaegar Resto' />
						</NavLink>
					</li>
					<li className={`${styles.navigation__item} `}>
						<NavLink
							to={ROUTE_KEYS.HOME}
							className={({ ...params }) =>
								`${styles[checkActiveLink(params)] || ''} ${
									styles.navigation__link
								}`
							}
						>
							<img
								className={styles.navigation__icon}
								src={HomeIcon}
								alt=''
							/>
						</NavLink>
					</li>
					<li className={styles.navigation__item}>
						<NavLink
							to={ROUTE_KEYS.DISCOUNT}
							className={({ ...params }) =>
								`${styles[checkActiveLink(params)] || ''} ${
									styles.navigation__link
								}`
							}
						>
							<img
								className={styles.navigation__icon}
								src={DiscountIcon}
								alt=''
							/>
						</NavLink>
					</li>
					<li className={styles.navigation__item}>
						<NavLink
							to={ROUTE_KEYS.DASHBOARD}
							className={({ ...params }) =>
								`${styles[checkActiveLink(params)] || ''} ${
									styles.navigation__link
								}`
							}
						>
							<img
								className={styles.navigation__icon}
								src={DashboardIcon}
								alt=''
							/>
						</NavLink>
					</li>
					<li className={styles.navigation__item}>
						<NavLink className={styles.navigation__link}>
							<img
								className={styles.navigation__icon}
								src={MessageIcon}
								alt=''
							/>
						</NavLink>
					</li>
					<li className={styles.navigation__item}>
						<NavLink className={styles.navigation__link}>
							<img
								className={styles.navigation__icon}
								src={NotificationIcon}
								alt=''
							/>
						</NavLink>
					</li>
					<li
						className={styles.navigation__item}
						style={window.innerWidth <= 930 ? { display: 'none' } : {}}
					>
						<NavLink
							to={ROUTE_KEYS.SETTINGS}
							className={({ ...params }) =>
								`${styles[checkActiveLink(params)] || ''} ${
									styles.navigation__link
								}`
							}
						>
							<img
								className={styles.navigation__icon}
								src={SettingsIcon}
								alt=''
							/>
						</NavLink>
					</li>
					<li
						className={`${styles.navigation__item} ${
							styles.navigation__itemButton
						} ${
							navCtx.isSideBarVisible &&
							styles['navigation__itemButtonActive']
						}`}
					>
						<button
							data-count={basketLength}
							className={styles.navigation__link}
							onClick={navCtx.showNavigation}
						>
							<ShoppingCartIcon />
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
