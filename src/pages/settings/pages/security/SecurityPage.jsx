import React from 'react';
import { Helmet } from 'react-helmet';

const SecurityPage = () => {
	return (
		<div>
			<Helmet>
				<title>Jaegar Resto | Настройки | Защита</title>
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
			<h1>Security</h1>
		</div>
	);
};

export default SecurityPage;