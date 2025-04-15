import React, { createContext, useContext, useState } from 'react'
import { STORAGE_KEYS } from '../../constants/common/StorageKeys'
import {
	getDataFromLocalStorage,
	setDataToLocalStorage,
} from '../../helpers/common'

const BasketContext = createContext({
	basket: [],
	totalAmount: 0,
	basketLength: 0,
	readBasketData: () => {},
	addProductToBasket: () => {},
	handleProductDelete: () => {},
})
export const useBasketContext = () => useContext(BasketContext)

const BasketProvider = ({ children }) => {
	const [basket, setBasket] = useState(
		() => getDataFromLocalStorage(STORAGE_KEYS.BASKET) || []
	)

	const readBasketData = () => {
		const updatedBasket = getDataFromLocalStorage(STORAGE_KEYS.BASKET) || []
		setBasket(updatedBasket)
	}

	const addProductToBasket = (newProduct) => {
		let message
		const doesTheElementExist = basket.find(
			(product) => product.title === newProduct.title
		)
		if (!doesTheElementExist) {
			const updatedBasket = [...basket, newProduct]
			setDataToLocalStorage(STORAGE_KEYS.BASKET, updatedBasket)
			setBasket(updatedBasket)
			message = `${newProduct.description} успешно добавлен в корзину!`
		} else {
			message = `${newProduct.description} уже существует!`
		}
		return message
	}

	const handleProductDelete = (title) => {
		const filteredBasket = basket.filter((elem) => elem.title !== title)
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
		addProductToBasket,
		handleProductDelete,
		basketLength: basket.length,
	}
	return (
		<BasketContext.Provider value={values}>{children}</BasketContext.Provider>
	)
}

export default BasketProvider
