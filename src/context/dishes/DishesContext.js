import React, { createContext, useContext, useEffect, useState } from 'react';
import { STORAGE_KEYS } from '../../constants/common/StorageKeys';
import {
	getDataFromLocalStorage,
	setDataToLocalStorage,
} from '../../constants/helpers/common';

const dishesContext = createContext([]);
export const useDishesContext = () => useContext(dishesContext);
const DishesContextProvider = ({ children }) => {
	const [dummyDishes, setDummyDishes] = useState([
		//
		//
		//
		{
			id: 1,
			description: 'Острая приправленная лапша из морепродуктов',
			price: 193,
			info: 20,
			isNew: false,
			categories: ['все', 'суп', 'горячие блюда'],
			imageURL: require('../../assets/images/dishes/01.png'),
		},
		{
			id: 2,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 11,
			isNew: false,
			categories: ['все', '', 'горячие блюда'],
			imageURL: require('../../assets/images/dishes/02.png'),
		},
		{
			id: 3,
			description: 'Клецки из говядины в горячем кислом супе',
			price: 253,
			info: 16,
			isNew: false,
			categories: ['все', 'суп', 'горячие блюда'],
			imageURL: require('../../assets/images/dishes/03.png'),
		},
		{
			id: 4,
			description: 'Полезная лапша с листьями шпината',
			price: 278,
			info: 22,
			isNew: false,
			categories: ['все', '', 'горячие блюда'],
			imageURL: require('../../assets/images/dishes/04.png'),
		},
		{
			id: 5,
			description: 'Острая лапша быстрого приготовления с фирменным омлетом',
			price: 304,
			info: 17,
			isNew: false,
			categories: ['все', 'суп', 'горячие блюда'],
			imageURL: require('../../assets/images/dishes/05.png'),
		},
		{
			id: 6,
			description: 'Полезная лапша с листьями шпината',
			price: 278,
			info: 22,
			isNew: false,
			categories: ['все', '', 'горячие блюда'],
			imageURL: require('../../assets/images/dishes/06.png'),
		},
		{
			id: 7,
			description: 'Горячий острый жареный рис с омлетом',
			price: 295,
			info: 13,
			isNew: false,
			categories: ['все', 'суп', 'горячие блюда'],
			imageURL: require('../../assets/images/dishes/07.png'),
		},
		{
			id: 8,
			description: 'Острая лапша быстрого приготовления с фирменным омлетом',
			price: 304,
			info: 17,
			isNew: false,
			categories: ['все', 'суп', 'горячие блюда'],
			imageURL: require('../../assets/images/dishes/08.png'),
		},
		{
			id: 9,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: false,
			categories: ['все', 'суп', 'горячие блюда'],
			imageURL: require('../../assets/images/dishes/09.png'),
		},
		{
			id: 10,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: false,
			categories: ['все', 'напитки'],
			imageURL: require('../../assets/images/drinks/01.png'),
		},
		{
			id: 11,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: true,
			categories: ['все', 'напитки'],
			imageURL: require('../../assets/images/drinks/02.png'),
		},
		{
			id: 12,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: false,
			categories: ['все', 'напитки'],
			imageURL: require('../../assets/images/drinks/03.png'),
		},
		{
			id: 13,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: false,
			categories: ['все', 'напитки'],
			imageURL: require('../../assets/images/drinks/04.png'),
		},
		{
			id: 14,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: true,
			categories: ['все', 'напитки'],
			imageURL: require('../../assets/images/drinks/05.png'),
		},
		{
			id: 15,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: true,
			categories: ['все', 'десерт'],
			imageURL: require('../../assets/images/desserts/01.png'),
		},
		{
			id: 16,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: false,
			categories: ['все', 'десерт'],
			imageURL: require('../../assets/images/desserts/02.png'),
		},
		{
			id: 17,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: false,
			categories: ['все', 'десерт'],
			imageURL: require('../../assets/images/desserts/03.png'),
		},
		{
			id: 18,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: true,
			categories: ['все', 'десерт'],
			imageURL: require('../../assets/images/desserts/04.png'),
		},
		{
			id: 19,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: false,
			categories: ['все', 'десерт'],
			imageURL: require('../../assets/images/desserts/05.png'),
		},
		{
			id: 20,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: false,
			categories: ['все', 'гриль'],
			imageURL: require('../../assets/images/grill/01.png'),
		},
		{
			id: 21,
			description: 'Соленые макароны с грибным соусом',
			price: 227,
			info: 20,
			isNew: false,
			categories: ['все', 'гриль'],
			imageURL: require('../../assets/images/grill/02.png'),
		},
		{
			id: 22,
			description: 'Свежий смешанный овощный салат',
			price: 180,
			info: 20,
			isNew: false,
			categories: ['все', 'салат'],
			imageURL: require('../../assets/images/salads/01.png'),
		},
		{
			id: 23,
			description: 'Греческий салат',
			price: 250,
			info: 15,
			isNew: false,
			categories: ['все', 'салат'],
			imageURL: require('../../assets/images/salads/02.png'),
		},
		{
			id: 24,
			description: 'Салат табуле',
			price: 220,
			info: 10,
			isNew: false,
			categories: ['все', 'салат'],
			imageURL: require('../../assets/images/salads/03.png'),
		},
		{
			id: 25,
			description: 'Салат с авокадо и креветками',
			price: 350,
			info: 8,
			isNew: false,
			categories: ['все', 'салат'],
			imageURL: require('../../assets/images/salads/04.png'),
		},
		{
			id: 26,
			description: 'Салат с тунцом',
			price: 300,
			info: 12,
			isNew: true,
			categories: ['все', 'салат'],
			imageURL: require('../../assets/images/salads/05.png'),
		},
		{
			id: 27,
			description: 'Брускетта',
			price: 150,
			info: 20,
			isNew: false,
			categories: ['все', 'закуска'],
			imageURL: require('../../assets/images/snacks/01.png'),
		},
		{
			id: 28,
			description: 'Хумус с лавашем',
			price: 180,
			info: 20,
			isNew: true,
			categories: ['все', 'закуска'],
			imageURL: require('../../assets/images/snacks/02.png'),
		},
		{
			id: 29,
			description: 'Капрезе',
			price: 220,
			info: 20,
			isNew: false,
			categories: ['все', 'закуска'],
			imageURL: require('../../assets/images/snacks/03.png'),
		},
	]);
	const [storageDishes, setStorageDishes] = useState(() => {
		return getDataFromLocalStorage(STORAGE_KEYS.DISHES) || dummyDishes;
	});

	const [searchValue, setSearchValue] = useState('');
	const searchInputHandler = (event) => {
		const { value } = event.target;
		const searchID = setTimeout(() => {
			setSearchValue(value);
		}, 550);

		return () => {
			clearTimeout(searchID);
		};
	};

	const filteredAndSortedDishes = (category, currentPage, itemsPerPage) => {
		const filteredStorageDishes = storageDishes?.filter((dish) => {
			return dish.description
				.toLowerCase()
				.includes(searchValue.toLowerCase());
		});

		if (category) {
			const categoryFilteredDishes = filteredStorageDishes.filter(
				({ categories }) => categories.includes(category)
			);
			return categoryFilteredDishes?.slice(
				(currentPage - 1) * itemsPerPage,
				currentPage * itemsPerPage
			);
		}

		return filteredStorageDishes?.slice(
			(currentPage - 1) * itemsPerPage,
			currentPage * itemsPerPage
		);
	};

	const getNextId = () => {
		const maxId =
			storageDishes.length > 0
				? Math.max(...storageDishes.map((dish) => dish.id))
				: 0;
		return maxId + 1;
	};

	const createNewDish = (data) => {
		const id = getNextId();
		const newDish = { ...data, id: id, price: +data.price };
		setStorageDishes((prevState) => {
			const updatedDishes = [...prevState, newDish];
			setDataToLocalStorage(STORAGE_KEYS.DISHES, updatedDishes);
			return updatedDishes;
		});
	};

	const editDish = (id, editedDish) => {
		setStorageDishes((prevState) => {
			const filteredDishes = prevState.filter((dish) => {
				if (id !== dish.id) {
					return true;
				}
				return false;
			});

			return [...filteredDishes, editedDish];
		});
	};

	useEffect(() => {
		setDataToLocalStorage(STORAGE_KEYS.DISHES, storageDishes);
	}, [storageDishes]);

	const values = {
		dummyDishes,
		storageDishes,
		editDish,
		createNewDish,
		searchInputHandler,
		filteredAndSortedDishes,
	};
	return (
		<dishesContext.Provider value={values}>{children}</dishesContext.Provider>
	);
};

export default DishesContextProvider;
