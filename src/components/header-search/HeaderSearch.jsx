import { useRef } from 'react'
import { Search } from '../../assets/icons/common/Search'
import styles from './header-search.module.css'

export const HeaderSearch = (props) => {
	const searchRef = useRef(null)
	const handleSearch = () => {
		props.onSearch(searchRef.current.value)
	}
	return (
		<div className={styles.search}>
			<button className={styles.search__button} onClick={handleSearch}>
				<Search />
			</button>
			<input
				ref={searchRef}
				className={styles.search__input}
				placeholder='Ищите еду, кофе и так далее...'
				type='search'
			/>
		</div>
	)
}
