import React from 'react'
import { useNavbarContext } from '../../context/navbar/NavbarContext'
import { DATE_NOW } from '../../utils/header'
import BurgerMenu from '../burger-menu/BurgerMenu'
import { HeaderSearch } from '../header-search/HeaderSearch'
import styles from './header.module.css'

const Header = () => {
	const { toggleNavbar, open } = useNavbarContext()

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
					<BurgerMenu isOpen={open} />
				</button>
			</div>
			<HeaderSearch placeholder='Ищите еду, кофе и так далее...' />
		</header>
	)
}
export default Header
