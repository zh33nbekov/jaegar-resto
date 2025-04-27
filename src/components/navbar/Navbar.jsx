import clsx from 'clsx'

import { NavLink } from 'react-router-dom'
import { ShoppingCart } from '../../assets/icons/common/ShoppingCart'
import { AppLogo } from '../../assets/icons/navbar'
import { NAVBAR_LINKS } from '../../constants'
import { NAVBAR_ROUTE_KEYS } from '../../constants/navbar'
import { useNavbar } from '../../hooks/useNavbar'
import { useScrollLock } from '../../hooks/useScrollLock'
import { useSidebar } from '../../hooks/useSidebar'
import { useBasketStore } from '../../store/basket'
import { useNavbarStore } from '../../store/navbar'
import { useSidebarStore } from '../../store/sidebar'
import BurgerMenu from '../burger-menu/BurgerMenu'
import styles from './navbar.module.css'

const Navbar = () => {
	const { handleClose } = useNavbar()
	const navbarStore = useNavbarStore((state) => state)
	const sidebarStore = useSidebarStore((state) => state)
	const basketLength = useBasketStore((state) => state.items.length)
	const { toggleSidebar } = useSidebar()
	const navbarPosition = navbarStore.windowWidth > 655 ? 'sticky' : 'fixed'
	const toggleButton = JSON.parse(localStorage.getItem('toggleButton') || '{}')
	useScrollLock(navbarStore.open)

	return (
		<>
			{navbarStore.open || navbarStore.isVisible ? (
				<nav
					className={clsx(styles.navigation, {
						[styles[navbarStore.animationClass]]:
							navbarStore.animationClass,
					})}
					style={{ position: navbarPosition }}
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
										clsx(styles.navigation__link, {
											[styles.active]: isActive,
										})
									}
								>
									<span className='sr-only'>{elem.srOnly}</span>
									<elem.icon />
								</NavLink>
							</li>
						))}
					</ul>
					<button
						onClick={toggleSidebar}
						data-count={basketLength}
						className={clsx(styles.basketButton, {
							[styles.active]: sidebarStore.open,
						})}
					>
						<span className='sr-only'>Корзина</span>
						<ShoppingCart />
					</button>
					<button
						onClick={() => handleClose()}
						className={styles.navbar__toggle}
						style={{
							top: toggleButton.top,
							left: toggleButton.left,
							width: toggleButton.width,
							height: toggleButton.height,
						}}
					>
						<BurgerMenu isOpen={true} />
					</button>
				</nav>
			) : null}
		</>
	)
}

export default Navbar
