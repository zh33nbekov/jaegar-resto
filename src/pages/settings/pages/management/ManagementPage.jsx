import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import OptionIcon from '../../../../assets/icons/option.svg'
import PlusIcon from '../../../../assets/icons/plus.svg'
import { Backdrop, Modal } from '../../../../components/UI'
import ManagementDishCard from './ManagementDishCard'
import ManagementEditDish from './ManagementEditDish'
import ManagementForm from './ManagementForm'
import styles from './ManagementPage.module.css'

const ManagementPage = () => {
	const [isNewDishForm, setIsNewDishForm] = useState(false)
	const [isEditDishForm, setIsEditDishForm] = useState(false)
	const [isAnimationClass, setIsAnimationClass] = useState('')
	const [editDish, setEditDish] = useState({
		description: '',
		price: 0,
		info: '',
		imageURL: '',
		id: null,
		categories: [],
	})

	const showNewDishForm = () => {
		setIsNewDishForm(true)
	}
	const hideNewDishForm = () => {
		setIsAnimationClass('closed')
		const formID = setTimeout(() => {
			setIsNewDishForm(false)
			setIsAnimationClass('')
		}, 285)

		return () => {
			clearTimeout(formID)
		}
	}

	const showEditDishForm = (data) => {
		setEditDish((prevState) => {
			return {
				...prevState,
				description: data?.description,
				info: data?.info,
				price: data?.price,
				imageURL: data?.imageURL,
				id: data?.id,
				categories: data?.categories,
			}
		})
		setIsEditDishForm(true)
	}

	const hideEditDishForm = () => {
		setIsAnimationClass('closed')
		const formID = setTimeout(() => {
			setIsEditDishForm(false)
			setIsAnimationClass('')
		}, 285)

		return () => {
			clearTimeout(formID)
		}
	}

	const handleChange = (name) => {
		return (event) => {
			const { value } = event.target

			setEditDish((prevState) => {
				return {
					...prevState,
					[name]: value,
				}
			})
		}
	}

	const saveEditedDish = (event) => {
		event.preventDefault()
		// dishesCtx.editDish(editDish.id, editDish)
	}
	return (
		<>
			<Helmet>
				<title>Jaegar Resto | Настройки | Управление</title>
				<meta
					name='description'
					content='Страница настроек Jaegar Resto – управление профилем, настройками бронирования, уведомлениями и другими параметрами ресторана для улучшения сервиса.'
				/>
				<meta
					name='keywords'
					content='настройки, Jaegar Resto, управление профилем, бронирование, уведомления, параметры, ресторан'
				/>
				<meta name='author' content='Jaegar Resto' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Helmet>

			{/* Добавить новое блюдо */}
			<Backdrop
				open={isNewDishForm}
				onClose={hideNewDishForm}
				animationClass={isAnimationClass}
			/>
			<Modal
				open={isNewDishForm}
				onClose={hideNewDishForm}
				animationClass={isAnimationClass}
			>
				<ManagementForm />
			</Modal>
			{/* Добавить новое блюдо */}

			{/* Редактировать блюдо */}
			<Backdrop
				open={isEditDishForm}
				onClose={hideEditDishForm}
				animationClass={isAnimationClass}
			/>
			<Modal open={isEditDishForm} animationClass={isAnimationClass}>
				<ManagementEditDish
					data={editDish}
					onChange={handleChange}
					onSave={saveEditedDish}
				/>
			</Modal>
			{/* Редактировать блюдо */}

			<section className={styles.management}>
				<div className={styles.management__header}>
					<h1 className={styles.management__title}>
						Управление продуктами
					</h1>
					<div className={styles.management__option}>
						<img src={OptionIcon} alt='' />
						<span className={styles.management__optionText}>
							Управление категориями
						</span>
					</div>
				</div>

				<div className={styles.management__dishes}>
					<button
						className={styles.management__button}
						onClick={showNewDishForm}
					>
						<img src={PlusIcon} alt='' />
						<span className={styles.management__buttonText}>
							Добавьте новое блюдо
						</span>
					</button>

					{[].map((dish) => (
						<div className={styles.management__dish} key={dish.id}>
							<ManagementDishCard
								description={dish.description}
								info={dish.info}
								price={dish.price}
								id={dish.id}
								imageURL={dish.imageURL}
								onOpen={showEditDishForm}
								onClose={hideEditDishForm}
								categories={dish.categories}
							/>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default ManagementPage
