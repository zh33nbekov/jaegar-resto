import React, { createContext, useContext, useEffect, useState } from 'react'
import { DUMMY_DISHES } from '../../constants'
import { STORAGE_KEYS } from '../../constants/common/StorageKeys'
import {
	getDataFromLocalStorage,
	setDataToLocalStorage,
} from '../../helpers/common'

const DishesContext = createContext({
	dummyDishes: [],
	storageDishes: [],
	editDish: () => {},
	createNewDish: () => {},
	searchInputHandler: () => {},
	filteredAndSortedDishes: () => {},
})

export const useDishesContext = () => useContext(DishesContext)

const DishesProvider = ({ children }) => {
	const [dummyDishes] = useState(DUMMY_DISHES)
	const [storageDishes, setStorageDishes] = useState(() => {
		return getDataFromLocalStorage(STORAGE_KEYS.DISHES) || DUMMY_DISHES
	})

	const [searchValue, setSearchValue] = useState('')
	const searchInputHandler = (searchQuery) => {
		setSearchValue(searchQuery)
	}

	const filteredAndSortedDishes = (category, currentPage, itemsPerPage) => {
		console.log('rendered')
		const filteredDishes = storageDishes?.filter((dish) => {
			return dish.description
				.toLowerCase()
				.includes(searchValue.toLowerCase())
		})

		if (category) {
			const filteringByCategory = filteredDishes.filter(({ categories }) =>
				categories.includes(category)
			)
			return filteringByCategory?.slice(
				(currentPage - 1) * itemsPerPage,
				currentPage * itemsPerPage
			)
		}

		return filteredDishes?.slice(
			(currentPage - 1) * itemsPerPage,
			currentPage * itemsPerPage
		)
	}

	const createUniqueId = () => {
		let id = 0
		if (storageDishes.length > 0) {
			id = Math.max(...storageDishes.map((dish) => dish.id))
		}
		return id + 1
	}

	const createNewDish = (data) => {
		const id = createUniqueId()
		const newDish = { ...data, id, price: +data.price }
		setStorageDishes((prevState) => {
			const updatedDishes = [...prevState, newDish]
			setDataToLocalStorage(STORAGE_KEYS.DISHES, updatedDishes)
			return updatedDishes
		})
	}

	const editDish = (id, editedDish) => {
		setStorageDishes((prevState) => {
			const filteredDishes = prevState.filter((dish) => {
				if (id !== dish.id) return true
				return false
			})

			return [...filteredDishes, editedDish]
		})
	}

	useEffect(() => {
		setDataToLocalStorage(STORAGE_KEYS.DISHES, storageDishes)
	}, [storageDishes])

	const values = {
		editDish,
		dummyDishes,
		storageDishes,
		createNewDish,
		searchInputHandler,
		filteredAndSortedDishes,
	}
	return (
		<DishesContext.Provider value={values}>{children}</DishesContext.Provider>
	)
}

export default DishesProvider
