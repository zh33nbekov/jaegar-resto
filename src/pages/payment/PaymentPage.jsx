import axios from 'axios';
import React, { useRef, useState } from 'react';
import { STORAGE_KEYS } from '../../constants/common/StorageKeys';
import { getDataFromLocalStorage } from '../../constants/helpers/common';
import styles from './PaymentPage.module.css';

const PaymentPage = () => {
	const [phone, setPhone] = useState('+996 () __-__-__');
	const [name, setName] = useState('');
	const [responseMessage, setResponseMessage] = useState('');
	const [basket, setBasket] = useState(() => {
		const data = getDataFromLocalStorage(STORAGE_KEYS.BASKET);
		return data;
	});

	const fetchBasketData = () => {
		return basket
			.map(
				(elem) => `Название: ${elem.description},\nЦена: ${elem.price} сом`
			)
			.join('\n\n');
	};

	const phoneRef = useRef(null); // Создаем реф для инпута

	const filteredPhoneNumber = () => {
		const totalPhoneNumber = phone
			.split('')
			.filter((elem) => {
				if (
					elem !== ' ' &&
					elem !== '(' &&
					elem !== ')' &&
					elem !== '_' &&
					elem !== '-' &&
					elem !== '+'
				) {
					return true;
				}
				return false;
			})
			.join('');

		return totalPhoneNumber;
	};

	const handleChangePhoneInput = (event) => {
		let { value } = event.target;

		// Удаляем все нецифровые символы, кроме `+`
		const numbersOnly = value.replace(/\D/g, '');

		// Устанавливаем префикс +996 и ограничиваем ввод
		let formattedNumber = '+996 (';

		// Заполняем маску цифрами
		if (numbersOnly.length > 0) {
			formattedNumber += numbersOnly.slice(3, 6); // Код региона
		}

		formattedNumber += ') ';

		if (numbersOnly.length >= 6) {
			formattedNumber += numbersOnly.slice(6, 8); // Первые 2 цифры номера
		}

		// Добавляем дефис только если есть хотя бы 8 цифр
		if (numbersOnly.length >= 8) {
			formattedNumber += '-';
			formattedNumber += numbersOnly.slice(8, 10); // Следующие 2 цифры номера
		} else {
			formattedNumber += '__'; // Добавляем заполнители, если нет 8 цифр
		}

		// Добавляем дефис и последние 2 цифры только если есть хотя бы 10 цифр
		if (numbersOnly.length >= 10) {
			formattedNumber += '-';
			formattedNumber += numbersOnly.slice(10, 12); // Последние 2 цифры номера
		} else {
			formattedNumber += '__'; // Заполнитель для последних 2 цифр
		}

		// Обновляем состояние
		setPhone(formattedNumber);
	};

	const handleChangeNameInput = (event) => {
		const { value } = event.target;
		setName(value);
	};

	const handleFocus = () => {
		// Очищаем поле для ввода номера
		if (phone.length < 19) {
			setPhone('+996 ('); // Устанавливаем начальное значение
		}
		const handleFocusId = setTimeout(() => {
			phoneRef.current.setSelectionRange(6, 6); // Позиция после "+996 ("
		}, 0); // Используем setTimeout для отложенного выполнения

		return () => {
			clearTimeout(handleFocusId);
		};
	};

	const handleBlur = () => {
		if (phone.length < 19) {
			setPhone('+996 (___) __-__-__');
		}
	};
	const filterOptions = [' ', '-', '(', ')', '_'];

	const handleSubmit = async (event) => {
		event.preventDefault();
		const apiKey = process.env.REACT_APP_API_KEY;
		const ID = process.env.REACT_APP_ID;

		if (!phone || !name) {
			alert('Пожалуйста, заполните все поля.');
			return;
		}

		const url = process.env.REACT_APP_URI;

		const headers = {
			Authorization: `App ${apiKey}`,
			'Content-Type': 'application/json',
			Accept: 'application/json',
		};
		const phoneNumber = filteredPhoneNumber();
		const basketData = fetchBasketData();
		const data = {
			messages: [
				{
					destinations: [{ to: phoneNumber }],
					from: ID, // Замените на ваш ID отправителя
					text: basketData,
				},
			],
		};

		try {
			const response = await axios.post(url, data, { headers });
		} catch (error) {
			console.error(
				'Ошибка при отправке SMS:',
				error.response ? error.response.data : error.message
			);
			alert(
				`Ошибка: ${
					error.response ? error.response.data.text : error.message
				}`
			);
		}
	};

	const disabledButton = () => {
		if (phone.length !== 19 || !name) {
			return 'disabled';
		}
	};

	return (
		<div className={styles.payment}>
			<form className={styles.payment__form} onSubmit={handleSubmit}>
				<div className={styles.payment__input}>
					<input
						type='name'
						id='name'
						placeholder=' '
						required
						onChange={handleChangeNameInput}
					/>
					<label htmlFor='name'>Имя</label>
				</div>
				<div className={styles.payment__input}>
					<input
						type='tel'
						id='tel'
						placeholder=' '
						required
						onChange={handleChangePhoneInput}
						onFocus={handleFocus}
						onBlur={handleBlur}
						ref={phoneRef}
						value={phone}
					/>
					<label htmlFor='tel'>Номер</label>
				</div>
				<span style={{ color: 'violet' }}>
					{responseMessage && <p>{responseMessage}</p>}
				</span>
				<button
					className={`${styles.payment__button} btn ${disabledButton()}`}
					disabled={disabledButton()}
				>
					Отправить
				</button>
			</form>
		</div>
	);
};

export default PaymentPage;
