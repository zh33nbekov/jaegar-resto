import clsx from 'clsx'
import React, { memo } from 'react'
import { DISHES_TYPES } from '../../constants'
import styles from './dishes-type.module.css'

const DishesType = memo((props) => {
	const toggleDishType = ({ index, name }) => {
		props.getInfoForPagination(index, name)
	}

	return (
		<ul className={styles['dishes-type']}>
			{DISHES_TYPES.map((elem, index) => (
				<li
					key={elem.name}
					className={clsx(styles['dishes-type__item'], {
						[styles.active]: props.activeDishType === index,
					})}
					onClick={() => toggleDishType({ index, name: elem.name })}
				>
					{elem.name}
				</li>
			))}
		</ul>
	)
})
DishesType.displayName = 'DishesType'
export default DishesType
