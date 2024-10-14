import React from 'react';
import { Helmet } from 'react-helmet';
import OptionIcon from '../../../../assets/icons/option.svg';
import PlusIcon from '../../../../assets/icons/plus.svg';
import styles from './ManagementPage.module.css';

const ManagementPage = () => {
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
					<div className={styles.management__button}>
						<img src={PlusIcon} alt='' />
						<span className={styles.management__buttonText}>
							Добавьте новое блюдо
						</span>
					</div>
				</div>
			</section>
		</>
	);
};

export default ManagementPage;
