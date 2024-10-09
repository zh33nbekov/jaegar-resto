import React, { createContext, useContext, useEffect, useState } from 'react';
import { STORAGE_KEYS } from '../../constants/common/StorageKeys';
import {
	getDataFromLocalStorage,
	setDataToLocalStorage,
} from '../../constants/helpers/common';
import { useNavigationContext } from '../navigation/NavigationContext';

const dishBasketContext = createContext([]);
export const useDishBasketContext = () => useContext(dishBasketContext);

const DishBasketContextProvider = ({ children }) => {
	const [basket, setBasket] = useState(
		() => getDataFromLocalStorage(STORAGE_KEYS.BASKET) || []
	);
	const basketLength = basket.length;
	const navCtx = useNavigationContext();

	// Обновление состояния корзины
	const readBasketData = () => {
		const updatedBasket = getDataFromLocalStorage(STORAGE_KEYS.BASKET) || [];
		setBasket(updatedBasket);
	};

	// Добавление элемента в корзину
	const setToBasket = (data) => {
		if (!basket.length) {
			navCtx.showNavigation();
		}
		const doesExistItemInBasket = basket.find(
			(prevElem) => prevElem.id === data.id
		);
		if (!doesExistItemInBasket) {
			const updatedBasket = [...basket, data];
			setDataToLocalStorage(STORAGE_KEYS.BASKET, updatedBasket);
			setBasket(updatedBasket); // Обновляем состояние прямо здесь
		} else {
			const message = `${data.description} уже существует!`;
			return message;
		}
	};

	// Удаление элемента из корзины
	const removeFromBasket = (id) => {
		const filteredBasket = basket.filter((elem) => elem.id !== id);
		setDataToLocalStorage(STORAGE_KEYS.BASKET, filteredBasket);
		setBasket(filteredBasket); // Обновляем состояние здесь
	};

	const calculateTotalAmount = () => {
		const totalAmount = basket.reduce((acc, elem) => {
			return acc + elem.price;
		}, 0);
		return totalAmount;
	};

	// useEffect для синхронизации состояния корзины с localStorage
	useEffect(() => {
		const handleStorageChange = () => {
			readBasketData();
		};

		window.addEventListener('storage', handleStorageChange);
		return () => window.removeEventListener('storage', handleStorageChange);
	}, []);

	const values = {
		setToBasket,
		removeFromBasket,
		readBasketData,
		calculateTotalAmount,
		basket,
		basketLength,
	};
	return (
		<dishBasketContext.Provider value={values}>
			{children}
		</dishBasketContext.Provider>
	);
};

export default DishBasketContextProvider;
