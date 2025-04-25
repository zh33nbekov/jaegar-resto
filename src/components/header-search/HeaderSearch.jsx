import { memo, useRef, useState } from 'react'
import { Search } from '../../assets/icons/common/Search'
import styles from './header-search.module.css'

export const HeaderSearch = memo((props) => {
	const [searchTerm, setSearchTerm] = useState(() => {
		const storageSearchTerm = localStorage.getItem('searchTerm')
		return storageSearchTerm
	})
	const searchRef = useRef(null)

	return (
		<div className={styles.search}>
			<button className={styles.search__button}>
				<Search />
			</button>
			<input
				type='search'
				ref={searchRef}
				value={searchTerm}
				placeholder={props.placeholder}
				className={styles.search__input}
				onChange={(e) => {
					setSearchTerm(e.target.value)
					localStorage.setItem('searchTerm', e.target.value)
				}}
			/>
		</div>
	)
})
HeaderSearch.displayName = 'HeaderSearch'
