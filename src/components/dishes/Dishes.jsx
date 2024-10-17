import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import React, { useEffect, useState } from 'react';
import { useDishBasketContext } from '../../context/dishes/DishBasketContext';
import { useDishesContext } from '../../context/dishes/DishesContext';
import Snackbar from '../UI/snackbar/Snackbar';
import Dish from './Dish';
import styles from './Dishes.module.css';
import DishesTypes from './DishesTypes';

const Dishes = () => {
	const [snackbar, setSnackbar] = useState(false);
	const [snackbarOptions, setSnackbarOptions] = useState({ message: '' });
	const [activeDishType, setActiveDishType] = useState(0);
	const [checkedCategory, setCheckedCategory] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(8);
	const [snackbarAnimationClass, setSnackbarAnimationClass] = useState('');

	const dishesTypes = [
		{ name: 'Все' },
		{ name: 'Горячие блюда' },
		{ name: 'Салат' },
		{ name: 'Суп' },
		{ name: 'Гриль' },
		{ name: 'Закуска' },
		{ name: 'Десерт' },
		{ name: 'Напитки' },
	];

	const dishesCtx = useDishesContext();
	const dishBasketCtx = useDishBasketContext();

	// Пагинация
	const totalPages = Math.ceil(dishesCtx.storageDishes?.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = dishesCtx.filteredAndSortedDishes(
		checkedCategory,
		currentPage,
		itemsPerPage
	);

	const goToNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const goToPreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const showSnackbar = (message) => {
		setSnackbar(true);
		setSnackbarOptions((prevState) => ({ ...prevState, message }));
	};

	const hideSnackbar = () => {
		setSnackbarAnimationClass('closed');
		const snackbarID = setTimeout(() => {
			setSnackbar(false);
			setSnackbarAnimationClass('');
		}, 440);

		return () => {
			clearTimeout(snackbarID);
		};
	};

	const setDishToBasket =
		({ ...basketItem }) =>
		(event) => {
			event.preventDefault();
			const message = dishBasketCtx.setToBasket(basketItem);
			showSnackbar(
				message || `${basketItem.description} успешно добавлен в корзину!`
			);
		};

	const getIdxAndNameForDishPagination = (index, name) => {
		setActiveDishType(index);
		setCheckedCategory(name.toLowerCase());
		setCurrentPage(1);
	};

	useEffect(() => {
		const snackbarID = setTimeout(hideSnackbar, 5000);
		return () => clearTimeout(snackbarID);
	}, [snackbar]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 550) {
				setItemsPerPage(4);
			} else if (window.innerWidth < 965) {
				setItemsPerPage(6); // Если ширина меньше 726, также устанавливаем 4
			} else {
				setItemsPerPage(8);
			}
		};

		// Установка начального значения при загрузке компонента
		handleResize();

		// Добавление слушателя события resize
		window.addEventListener('resize', handleResize);

		// Удаление слушателя события при размонтировании компонента
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<Snackbar
				open={snackbar}
				onClose={hideSnackbar}
				animationClass={snackbarAnimationClass}
				options={snackbarOptions}
			/>
			<section className={styles.dishes}>
				<DishesTypes
					dishesTypes={dishesTypes}
					getInfoForPagination={getIdxAndNameForDishPagination}
					activeDishType={activeDishType}
				/>
				<div className={styles.dishes__info}>
					<h3 className={styles.dishes__title}>Выбирайте блюда</h3>
					<select name='' id='' className={styles.dishes__select}>
						<option value='пообедать в' className={styles.dishes__option}>
							Пообедать в
						</option>
						<option value='идти' className={styles.dishes__option}>
							Идти
						</option>
						<option value='доставка' className={styles.dishes__option}>
							Доставка
						</option>
					</select>
				</div>
				<div className={styles.dishes__content}>
					<div className={styles.dishes__wrapper}>
						{currentItems?.map((elem) => (
							<Dish
								key={elem.id}
								id={elem.id}
								description={elem.description}
								price={elem.price}
								categories={elem.categories}
								isNew={elem.isNew}
								info={elem.info}
								imageURL={elem.imageURL}
								onSetToBasket={setDishToBasket}
							/>
						))}
					</div>
					<div className={styles.dishes__paginationButtons}>
						<button
							className={`${styles.dishes__paginationButton} btn ${
								currentPage === 1 ? 'disabled' : ''
							}`}
							onClick={goToPreviousPage}
							disabled={currentPage === 1}
						>
							<ChevronLeftRoundedIcon />
						</button>
						<span className={styles.dishes__paginationPage}>
							Страница {currentPage} из {totalPages}
						</span>
						<button
							className={`${styles.dishes__paginationButton} btn ${
								currentPage === totalPages ? 'disabled' : ''
							}`}
							onClick={goToNextPage}
							disabled={currentPage === totalPages}
						>
							<ChevronRightRoundedIcon />
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Dishes;
