import React from 'react'
import { useNavbar } from '../../hooks/useNavbar'
import { useNavbarStore } from '../../store/navbar'
import { DATE_NOW } from '../../utils/header'
import BurgerMenu from '../burger-menu/BurgerMenu'
import { HeaderSearch } from '../header-search/HeaderSearch'
import styles from './header.module.css'

const Header = () => {
	const navbarStore = useNavbarStore((state) => state)
	const { toggleNavbar } = useNavbar()

	return (
		<header className={styles.header}>
			<div className={styles.header__info}>
				<div>
					<h1 className={styles.header__title}>Jaegar Resto</h1>
					<span className={styles.header__date}>{DATE_NOW}</span>
				</div>
				<button
					onClick={() => toggleNavbar()}
					className={styles.header__button}
				>
					<BurgerMenu isOpen={navbarStore.open} />
				</button>
			</div>
			<HeaderSearch placeholder='Ищите еду, кофе и так далее...' />
		</header>
	)
}
export default Header
