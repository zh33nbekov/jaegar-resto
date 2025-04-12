import React, { useState } from 'react'
import { useDishesContext } from '../../context/dishes/DishesContext'
import { HeaderSearch } from '../header-search/HeaderSearch'
import styles from './header.module.css'

const Header = () => {
	const [isInputFocused, setIsInputFocused] = useState(false)

	const handleFocus = () => setIsInputFocused(true)
	const handleBlur = () => setIsInputFocused(false)

	const dishesCtx = useDishesContext()

	const handleSearch = (searchQuery) => {
		dishesCtx.searchInputHandler(searchQuery)
	}

	const dateNow = new Date().toLocaleString('kg-KG', {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	})
	return (
		<header className={styles.header}>
			{isInputFocused && (
				<div className={styles.backdrop} onClick={handleBlur}></div>
			)}

			<div className={styles.header__info}>
				<h1 className={styles.header__title}>Jaegar Resto</h1>
				<span className={styles.header__date}>{dateNow}</span>
			</div>

			<HeaderSearch onSearch={handleSearch} />
		</header>
	)
}
export default Header
