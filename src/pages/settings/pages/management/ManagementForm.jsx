import React, { memo, useState } from 'react'
import { useDishesContext } from '../../../../context/dishes/DishesContext'
import styles from './ManagementForm.module.css'

const dishCategories = [
	{
		id: 'горячие блюда',
		label: 'Горячие блюда',
	},
	{
		id: 'салат',
		label: 'Салат',
	},
	{
		id: 'суп',
		label: 'Суп',
	},
	{
		id: 'гриль',
		label: 'Гриль',
	},
	{
		id: 'закуска',
		label: 'Закуски',
	},
	{
		id: 'напитки',
		label: 'Напитки',
	},
]

const inputs = [
	{
		label: 'Название',
		id: 'name',
		type: 'text',
		key: 'description',
	},
	{
		label: 'Доступно',
		id: 'available',
		type: 'number',
		key: 'info',
	},
	{
		label: 'Цена',
		id: 'price',
		type: 'number',
		key: 'price',
	},
	{
		label: 'Ссылка на image',
		id: 'url',
		type: 'text',
		key: 'imageURL',
	},
]

const ManagementForm = ({ onSubmit }) => {
	const [isNewDish, setIsNewDish] = useState({
		description: '',
		price: 0,
		info: '',
		isNew: false,
		categories: ['все'],
	})
	const dishCtx = useDishesContext()

	const inputsHandler = (name) => {
		return (event) => {
			const { value } = event.target
			setIsNewDish((prevState) => ({ ...prevState, [name]: value }))
		}
	}

	const categoryHandleChange = (event) => {
		const { id, checked } = event.target

		setIsNewDish((prevState) => {
			if (checked) {
				return { ...prevState, categories: [...prevState.categories, id] }
			}
			return {
				...prevState,
				categories: prevState.categories.filter(
					(category) => category !== id
				),
			}
		})
	}

	const dishOptionsHandler = () => {
		setIsNewDish((prevState) => ({
			...prevState,
			isNew: !prevState.isNew,
		}))
	}

	const submitHandler = (event) => {
		event.preventDefault()
		dishCtx.createNewDish(isNewDish)
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			{inputs.map((input) => (
				<div className={styles.form__input} key={input.id}>
					<input
						type={input.type}
						id={input.id}
						placeholder=' '
						required
						onChange={inputsHandler(input.key)}
					/>
					<label htmlFor={input.id}>{input.label}</label>
				</div>
			))}

			<div className={styles.form__option}>
				<input
					type='radio'
					checked={isNewDish.isNew === true}
					value={isNewDish.isNew}
					id='isNew'
					onChange={dishOptionsHandler}
				/>
				<label htmlFor='isNew'>Новинка</label>
			</div>

			<div className={styles.form__categories}>
				{dishCategories.map((category) => (
					<div className={styles.form__categorie} key={category.id}>
						<input
							type='checkbox'
							id={category.id}
							onChange={categoryHandleChange}
						/>
						<label htmlFor={category.id}>{category.label}</label>
					</div>
				))}
			</div>

			<button type='submit' className={`${styles.form__button} btn`}>
				Добавить
			</button>
		</form>
	)
}

export default memo(ManagementForm)
