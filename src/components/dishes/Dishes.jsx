import React, { useCallback, useEffect, useState } from 'react'
import { useDishBasketContext } from '../../context/dishes/DishBasketContext'
import { useDishesContext } from '../../context/dishes/DishesContext'
import Dish from '../dish/Dish'
import DishesPagination from '../dishes-pagination/DishesPagination'
import DishesType from '../dishes-type/DishesType'
import { Snackbar } from '../UI'
import styles from './dishes.module.css'

const Dishes = () => {
	const [snackbar, setSnackbar] = useState(false)
	const [snackbarOptions, setSnackbarOptions] = useState({ message: '' })
	const [activeDishType, setActiveDishType] = useState(0)
	const [checkedCategory, setCheckedCategory] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(8)
	const [snackbarAnimationClass, setSnackbarAnimationClass] = useState('')
	const dishesCtx = useDishesContext()
	const dishBasketCtx = useDishBasketContext()
	const totalPages = Math.ceil(dishesCtx.storageDishes?.length / itemsPerPage)
	const currentItems = dishesCtx.filteredAndSortedDishes(
		checkedCategory,
		currentPage,
		itemsPerPage
	)

	const goToNextPage = useCallback(() => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}, [currentPage, totalPages])

	const goToPreviousPage = useCallback(() => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}, [currentPage])

	const showSnackbar = (message) => {
		setSnackbar(true)
		setSnackbarOptions((prevState) => ({ ...prevState, message }))
	}

	const hideSnackbar = () => {
		setSnackbarAnimationClass('closed')
		const snackbarID = setTimeout(() => {
			setSnackbar(false)
			setSnackbarAnimationClass('')
		}, 440)

		return () => clearTimeout(snackbarID)
	}

	const addDishToBasket = async ({ ...basketItem }) => {
		const message = dishBasketCtx.addDishToBasket(basketItem)
		showSnackbar(message)
		const snackbarID = setTimeout(hideSnackbar, 3000)
		return () => clearTimeout(snackbarID)
	}

	const getIdxAndNameForDishPagination = useCallback((index, name) => {
		setActiveDishType(index)
		setCheckedCategory(name.toLowerCase())
		setCurrentPage(1)
	}, [])

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 550) {
				setItemsPerPage(4)
			} else if (window.innerWidth < 965) {
				setItemsPerPage(6)
			} else {
				setItemsPerPage(8)
			}
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<>
			<Snackbar
				open={snackbar}
				onClose={hideSnackbar}
				animationClass={snackbarAnimationClass}
				options={snackbarOptions}
			/>
			<section className={styles.dishes}>
				{/* <DishesType
					activeDishType={activeDishType}
					getInfoForPagination={getIdxAndNameForDishPagination}
				/> */}
				<h3 className={styles.dishes__title}>Выбирайте блюда</h3>
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
								onSetToBasket={addDishToBasket}
							/>
						))}
					</div>
					<DishesPagination
						totalPages={totalPages}
						currentPage={currentPage}
						goToNextPage={goToNextPage}
						goToPreviousPage={goToPreviousPage}
					/>
				</div>
			</section>
		</>
	)
}

export default Dishes
