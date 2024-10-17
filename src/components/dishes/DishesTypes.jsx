import React from 'react';
import styles from './Dishes.module.css';

const DishesTypes = ({ dishesTypes, activeDishType, getInfoForPagination }) => {
	const toggleDishType = ({ index, name }) => {
		getInfoForPagination(index, name);
	};

	return (
		<ul className={styles.dishesTypes}>
			{dishesTypes.map((elem, index) => (
				<li
					key={elem.name}
					className={`${styles.dishesTypes__item} ${
						activeDishType === index ? styles.dishesTypes__itemActive : ''
					}`}
					onClick={() => toggleDishType({ index, name: elem.name })}
				>
					{elem.name}
				</li>
			))}
		</ul>
	);
};

export default DishesTypes;
