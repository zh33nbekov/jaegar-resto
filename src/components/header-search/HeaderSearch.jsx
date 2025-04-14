import { useRef } from 'react'
import { Search } from '../../assets/icons/common/Search'
import styles from './header-search.module.css'

export const HeaderSearch = (props) => {
	const searchRef = useRef(null)
	return (
		<div className={styles.search}>
			<button className={styles.search__button}>
				<Search />
			</button>
			<input
				type='search'
				ref={searchRef}
				className={styles.search__input}
				placeholder={props.placeholder}
			/>
		</div>
	)
}
