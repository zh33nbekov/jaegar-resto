import React from 'react';
import styles from './ManagementEditDish.module.css';

const ManagementEditDish = ({ data }) => {
	console.log(data);

	const inputs = [
		{
			label: 'Название',
			id: 'name',
			type: 'text',
			key: 'description',
			value: data.description,
		},
		{
			label: 'Доступно',
			id: 'available',
			type: 'number',
			key: 'info',
			value: data.info,
		},
		{
			label: 'Цена',
			id: 'price',
			type: 'number',
			key: 'price',
			value: data.price,
		},
		{
			label: 'Ссылка на image',
			id: 'url',
			type: 'text',
			key: 'imageURL',
			value: data.imageURL,
		},
	];
	return (
		<form className={styles.edit}>
			{inputs.map((input) => (
				<div className={styles.edit__input} key={input.id}>
					<input
						type={input.type}
						id={input.id}
						placeholder=' '
						required
						onChange={() => {}}
						value={input.value}
					/>
					<label htmlFor={input.id}>{input.label}</label>
				</div>
			))}
			<button className={`${styles.edit__button} btn`}>Сохранить</button>
		</form>
	);
};

export default ManagementEditDish;
