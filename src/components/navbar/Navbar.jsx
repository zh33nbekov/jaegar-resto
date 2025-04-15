import clsx from 'clsx'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from '../../assets/icons/common/ShoppingCart'
import { AppLogo } from '../../assets/icons/navbar'
import { NAVBAR_LINKS } from '../../constants'
import { NAVBAR_ROUTE_KEYS } from '../../constants/navbar'
import { useSidebar } from '../../hooks/useSidebar'
import { useBasketStore } from '../../store/basket'
import { useNavbarStore } from '../../store/navbar'
import { useSidebarStore } from '../../store/sidebar'
import styles from './navbar.module.css'

const Navbar = () => {
	const navbarStore = useNavbarStore((state) => state)
	const sidebarStore = useSidebarStore((state) => state)
	const basketLength = useBasketStore((state) => state.items.length)
	const { toggleSidebar } = useSidebar()

	return (
		<>
			{navbarStore.open || navbarStore.isVisible ? (
				<nav
					className={clsx(styles.navigation, {
						[styles[navbarStore.animationClass]]:
							navbarStore.animationClass,
					})}
					style={
						navbarStore.windowWidth > 655
							? undefined
							: { position: 'fixed' }
					}
				>
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
						data-count={basketLength}
						onClick={toggleSidebar}
						className={clsx(styles.basketButton, {
							[styles.active]: sidebarStore.open,
						})}
					>
						<span className='sr-only'>Корзина</span>
						<ShoppingCart />
					</button>
				</nav>
			) : null}
		</>
	)
}

export default Navbar
