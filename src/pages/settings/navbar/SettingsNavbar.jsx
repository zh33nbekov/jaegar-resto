import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutUsIcon from '../../../assets/icons/navigation/about-us.svg';
import HeartIcon from '../../../assets/icons/navigation/heart.svg';
import ManagementIcon from '../../../assets/icons/navigation/management.svg';
import NotificationsIcon from '../../../assets/icons/navigation/notifications.svg';
import RestaurantIcon from '../../../assets/icons/navigation/restaurant.svg';
import SecurityIcon from '../../../assets/icons/navigation/security.svg';
import { ROUTE_KEYS } from '../../../constants/common/RouteKeys';
import styles from './SettingsNavbar.module.css';

const SettingsNavbar = () => {
	const links = [
		{
			id: 0,
			name: 'Дизайн',
			description: 'Темный и светлый режимы, размер шрифта',
			path: ROUTE_KEYS.APPEREANCE,
			icon: HeartIcon,
		},
		{
			id: 1,
			name: 'Ресторан',
			description: 'Информация о ресторане',
			path: ROUTE_KEYS.RESTAURANT,
			icon: RestaurantIcon,
		},
		{
			id: 2,
			name: 'Управление продуктами',
			description: 'Управляйте своим продуктом, ценообразованием и т.д',
			path: ROUTE_KEYS.MANAGEMENT,
			icon: ManagementIcon,
		},
		{
			id: 3,
			name: 'Уведомления',
			description: 'Настройте свои уведомления',
			path: ROUTE_KEYS.NOTIFICATIONS,
			icon: NotificationsIcon,
		},
		{
			id: 4,
			name: 'Защита',
			description: 'Настройка пароля, PIN-кода и т.д',
			path: ROUTE_KEYS.SECURITY,
			icon: SecurityIcon,
		},
		{
			id: 5,
			name: 'О нас',
			description: 'Информация о нас',
			path: ROUTE_KEYS.ABOUT_US,
			icon: AboutUsIcon,
		},
	];

	const checkActiveClass = ({ isActive }) => {
		if (isActive) {
			return 'navigation__activeLink';
		}
		return '';
	};

	const checkPlaceLink = (idx) => {
		if (idx === 0) {
			return 'navigation__firstLink';
		} else if (idx === links.length - 1) {
			return 'navigation__lastLink';
		}
		return '';
	};

	return (
		<nav className={styles.navigation}>
			{links.map((link, index) => (
				<li key={link.id} className={`${styles.navigation__item}`}>
					<NavLink
						className={({ ...params }) =>
							`${styles[checkActiveClass(params)] || ''} ${
								styles.navigation__link
							} ${styles.navigation__item} ${
								styles[checkPlaceLink(index)] || ''
							}`
						}
						to={link.path}
					>
						<img
							className={styles.navigation__icon}
							src={link.icon}
							alt={link.name}
						/>
						<div className={styles.navigation__linkContent}>
							<span className={styles.navigation__linkName}>
								{link.name}
							</span>
							<p className={styles.navigation__linkDescription}>
								{link.description}
							</p>
						</div>
					</NavLink>
				</li>
			))}
		</nav>
	);
};

export default SettingsNavbar;
