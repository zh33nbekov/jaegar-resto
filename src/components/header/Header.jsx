import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import React from 'react'
import { useDishesContext } from '../../context/dishes/DishesContext'
import styles from './header.module.css'

const Header = () => {
	const dateNow = new Date().toLocaleString('kg-KG', {
		weekday: 'short', // полный день недели
		year: 'numeric', // год
		month: 'short', // полный месяц
		day: '2-digit', // число
		hour: 'numeric', // часы
		minute: 'numeric', // минуты
		second: 'numeric', // секунды
	})

	const dishesCtx = useDishesContext()
	const searchInputHandler = (event) => {
		dishesCtx.searchInputHandler(event)
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__info}>
				<h1 className={styles.header__title}>Jaegar Resto</h1>
				<span className={styles.header__date}>{dateNow}</span>
			</div>
			<div className={styles.header__search}>
				<SearchRoundedIcon
					className={styles.header__searchIcon}
					sx={{ color: '#fff' }}
				/>
				<input
					className={styles.header__searchInput}
					placeholder='Ищите еду, кофе и так далее...'
					type='search'
					onChange={searchInputHandler}
				/>
			</div>
		</header>
	)
}

export default Header