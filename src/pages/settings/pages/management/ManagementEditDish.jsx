import React, { memo, useMemo } from 'react';
import styles from './ManagementEditDish.module.css';

const ManagementEditDish = ({ data, onChange, onSave }) => {
	const inputs = useMemo(
		() => [
			{
				label: 'Название',
				id: 'name',
				type: 'text',
				key: 'description',
				value: data.description,
				dishId: data.id,
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
		],
		[data.description, data.imageURL, data.info, data.price, data.id]
	);
	return (
		<form className={styles.edit}>
			{inputs.map((input) => (
				<div className={styles.edit__input} key={input.id}>
					<input
						type={input.type}
						id={input.id}
						placeholder=' '
						required
						onChange={onChange(input.key)}
						value={input.value}
					/>
					<label htmlFor={input.id}>{input.label}</label>
				</div>
			))}
			<button className={`${styles.edit__button} btn`} onClick={onSave}>
				Сохранить
			</button>
		</form>
	);
};

export default memo(ManagementEditDish);
