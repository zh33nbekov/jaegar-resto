import clsx from 'clsx'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from '../../assets/icons/common/ShoppingCart'
import { AppLogo } from '../../assets/icons/navbar'
import { NAVBAR_LINKS } from '../../constants'
import { NAVBAR_ROUTE_KEYS } from '../../constants/navbar'
import { useBasketContext } from '../../context/basket/BasketContext'
import { useNavbarContext } from '../../context/navbar/NavbarContext'
import { useSidebarContext } from '../../context/sidebar/SidebarContext'
import styles from './navbar.module.css'

const Navbar = () => {
	const { basketLength } = useBasketContext()
	const sidebarContext = useSidebarContext()
	const { windowWidth, isVisible, animationClass, open } = useNavbarContext()

	return (
		<>
			{open || isVisible ? (
				<nav
					className={clsx(styles.navigation, {
						[styles[animationClass]]: animationClass,
					})}
					style={windowWidth > 655 ? undefined : { position: 'fixed' }}
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
						onClick={sidebarContext.toggleSidebar}
						className={clsx(styles.basketButton, {
							[styles.active]: sidebarContext.sidebarVisible,
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
