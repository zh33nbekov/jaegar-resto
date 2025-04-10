import React, { createContext, useContext, useState } from 'react'
import { STORAGE_KEYS } from '../../constants/common/StorageKeys'
import {
	getDataFromLocalStorage,
	setDataToLocalStorage,
} from '../../helpers/common'

const DishBasketContext = createContext({
	basket: [],
	totalAmount: 0,
	basketLength: 0,
	readBasketData: () => {},
	addDishToBasket: () => {},
	handleDishDelete: () => {},
})
export const useDishBasketContext = () => useContext(DishBasketContext)

const DishBasketProvider = ({ children }) => {
	const [basket, setBasket] = useState(
		() => getDataFromLocalStorage(STORAGE_KEYS.BASKET) || []
	)

	const readBasketData = () => {
		const updatedBasket = getDataFromLocalStorage(STORAGE_KEYS.BASKET) || []
		setBasket(updatedBasket)
	}

	const addDishToBasket = (newDish) => {
		let message
		const doesTheElementExist = basket.find((dish) => dish.id === newDish.id)
		if (!doesTheElementExist) {
			const updatedBasket = [...basket, newDish]
			setDataToLocalStorage(STORAGE_KEYS.BASKET, updatedBasket)
			setBasket(updatedBasket)
			message = `${newDish.description} успешно добавлен в корзину!`
		} else {
			message = `${newDish.description} уже существует!`
		}
		return message
	}

	const handleDishDelete = (id) => {
		const filteredBasket = basket.filter((elem) => elem.id !== id)
		setDataToLocalStorage(STORAGE_KEYS.BASKET, filteredBasket)
		setBasket(filteredBasket)
	}

	//

	const totalAmount = basket.reduce((acc, elem) => {
		return (acc += elem.price)
	}, 0)

	const values = {
		basket,
		totalAmount,
		readBasketData,
		addDishToBasket,
		handleDishDelete,
		basketLength: basket.length,
	}
	return (
		<DishBasketContext.Provider value={values}>
			{children}
		</DishBasketContext.Provider>
	)
}

export default DishBasketProvider
