import React, { useRef } from 'react'
import { useHeader } from '../../hooks/useHeader'
import { useNavbar } from '../../hooks/useNavbar'
import { useNavbarStore } from '../../store/navbar'
import BurgerMenu from '../burger-menu/BurgerMenu'
import { HeaderSearch } from '../header-search/HeaderSearch'
import styles from './header.module.css'

const Header = () => {
	const { DATE_NOW } = useHeader()
	const { toggleNavbar } = useNavbar()
	const navbarStore = useNavbarStore((state) => state)
	const ref = useRef(null)
	const handleClick = () => {
		import('../../utils/header').then((module) => {
			module.handleToggleClick(ref, toggleNavbar)
		})
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__info}>
				<div>
					<h1 className={styles.header__title}>Jaegar Resto</h1>
					<span className={styles.header__date}>{DATE_NOW}</span>
				</div>
				<button
					ref={ref}
					aria-label='menu-button'
					onClick={handleClick}
					className={styles.header__toggle}
				>
					<BurgerMenu isOpen={navbarStore.open} />
				</button>
			</div>
			<HeaderSearch placeholder='Ищите еду, кофе и так далее...' />
		</header>
	)
}
export default Header
