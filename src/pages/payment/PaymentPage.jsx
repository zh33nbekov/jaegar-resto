import React, { useRef, useState } from 'react';
import styles from './PaymentPage.module.css';

const PaymentPage = () => {
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [responseMessage, setResponseMessage] = useState('');
	const phoneRef = useRef(null); // Создаем реф для инпута

	// const handleChange = (e) => {
	// 	let value = e.target.value;

	// 	// Удаляем все нецифровые символы, кроме `+`
	// 	const numbersOnly = value.replace(/\D/g, '');

	// 	// Устанавливаем префикс +996 и ограничиваем ввод
	// 	let formattedNumber = '+996 (';

	// 	// Заполняем маску цифрами
	// 	if (numbersOnly.length > 0) {
	// 		formattedNumber += numbersOnly.slice(3, 6); // Код региона
	// 	}

	// 	formattedNumber += ') ';

	// 	if (numbersOnly.length >= 6) {
	// 		formattedNumber += numbersOnly.slice(6, 8); // Первые 2 цифры номера
	// 	}

	// 	// Добавляем дефис только если есть хотя бы 8 цифр
	// 	if (numbersOnly.length >= 8) {
	// 		formattedNumber += '-';
	// 		formattedNumber += numbersOnly.slice(8, 10); // Следующие 2 цифры номера
	// 	} else {
	// 		formattedNumber += '__'; // Добавляем заполнители, если нет 8 цифр
	// 	}

	// 	// Добавляем дефис и последние 2 цифры только если есть хотя бы 10 цифр
	// 	if (numbersOnly.length >= 10) {
	// 		formattedNumber += '-';
	// 		formattedNumber += numbersOnly.slice(10, 12); // Последние 2 цифры номера
	// 	} else {
	// 		formattedNumber += '__'; // Заполнитель для последних 2 цифр
	// 	}

	// 	// Обновляем состояние
	// 	setPhone(formattedNumber);
	// };

	const handleChange = (event) => {
		const { value } = event.target;
		setPhone(value);
	};

	const handleFocus = () => {
		// Очищаем поле для ввода номера
		setPhone('+996 ('); // Устанавливаем начальное значение
		const handleFocusId = setTimeout(() => {
			phoneRef.current.setSelectionRange(7, 7); // Позиция после "+996 ("
		}, 0); // Используем setTimeout для отложенного выполнения

		return () => {
			clearTimeout(handleFocusId);
		};
	};

	const handleBlur = () => {
		setPhone('+996 (___) __-__-__');
	};

	return (
		<div className={styles.payment}>
			<form className={styles.payment__form} onSubmit={() => {}}>
				<input
					className={styles.payment__input}
					type='text'
					placeholder='Полное имя...'
				/>
				<input
					className={styles.payment__input}
					type='tel'
					value={phone}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={phoneRef} // Привязываем реф к инпуту
					maxLength='19'
					placeholder='+996 (___) __-__-__'
				/>
				<textarea
					placeholder='Ваше сообщение'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<span style={{ color: 'violet' }}>
					{responseMessage && <p>{responseMessage}</p>}
				</span>
				<button>Отправить</button>
			</form>
		</div>
	);
};

export default PaymentPage;
