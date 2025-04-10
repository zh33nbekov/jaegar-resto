import BasketIcon from '@mui/icons-material/ShoppingCart'
import clsx from 'clsx'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppLogo } from '../../assets/icons/navbar'
import { NAVBAR_LINKS } from '../../constants'
import { NAVBAR_ROUTE_KEYS } from '../../constants/navbar'
import { useDishBasketContext } from '../../context/dishes/DishBasketContext'
import { useSidebarContext } from '../../context/sidebar/SidebarContext'
import styles from './navbar.module.css'

const Navbar = () => {
	const { basketLength } = useDishBasketContext()
	const sidebarContext = useSidebarContext()

	return (
		<nav className={styles.navigation}>
			<NavLink to={NAVBAR_ROUTE_KEYS.HOME} className={styles.appLogo}>
				<span className='sr-only'>Логотип</span>
				<AppLogo />
			</NavLink>
			<ul className={styles.navigation__list}>
				{NAVBAR_LINKS.map((elem) => (
					<li className={styles.navigation__item} key={elem.srOnly}>
						<NavLink
							to={elem.path}
							className={({ isActive }) =>
								`${styles.navigation__link} ${
									isActive && styles.active
								}`
							}
						>
							<span className='sr-only'>{elem.srOnly}</span>
							<elem.icon />
						</NavLink>
					</li>
				))}
			</ul>
			<button
				onClick={sidebarContext.toggleSidebar}
				data-count={basketLength}
				className={clsx(styles.basketButton, {
					[styles.active]: sidebarContext.sidebarVisible,
				})}
			>
				<span className='sr-only'>Корзина</span>
				<BasketIcon />
			</button>
		</nav>
	)
}
export default Navbar
