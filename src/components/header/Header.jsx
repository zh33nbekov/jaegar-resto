import { memo, useRef } from 'react'
import { useHeader } from '../../hooks/useHeader'
import { useLazyImport } from '../../hooks/useLazyImport'
import { useNavbar } from '../../hooks/useNavbar'
import { useNavbarStore } from '../../store/navbar'
import BurgerMenu from '../burger-menu/BurgerMenu'
import { HeaderSearch } from '../header-search/HeaderSearch'
import styles from './header.module.css'

const Header = memo(() => {
	const loadHeaderUtils = useLazyImport(() =>
		import(/* webpackChunkName: "toggle-header" */ '../../async/header')
	)
	const { DATE_NOW } = useHeader()
	const { toggleNavbar } = useNavbar()
	const navbarOpen = useNavbarStore((state) => state.open)
	const ref = useRef(null)
	const handleClick = async () => {
		try {
			const { handleToggleClick } = await loadHeaderUtils()
			handleToggleClick(ref, toggleNavbar)
		} catch (error) {
			console.error('Ошибка загрузки модуля:', error)
		}
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
					<BurgerMenu isOpen={navbarOpen} />
				</button>
			</div>
			<HeaderSearch placeholder='Ищите еду, кофе и так далее...' />
		</header>
	)
})

Header.displayName = 'Header'
export default Header
