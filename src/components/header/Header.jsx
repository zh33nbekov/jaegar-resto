import React from 'react'
import { Menu } from '../../assets/icons/header/Menu'
import { useDishesContext } from '../../context/dishes/DishesContext'
import { DATE_NOW } from '../../utils/header'
import { HeaderSearch } from '../header-search/HeaderSearch'
import styles from './header.module.css'

const Header = () => {
	const dishesCtx = useDishesContext()

	const handleSearch = (searchQuery) => {
		dishesCtx.searchInputHandler(searchQuery)
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__info}>
				<div>
					<h1 className={styles.header__title}>Jaegar Resto</h1>
					<span className={styles.header__date}>{DATE_NOW}</span>
				</div>
				<button className={styles.header__button}>
					<Menu />
				</button>
			</div>
			<HeaderSearch
				onSearch={handleSearch}
				placeholder='Ищите еду, кофе и так далее...'
			/>
		</header>
	)
}
export default Header
