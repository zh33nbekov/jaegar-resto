import { Helmet } from 'react-helmet'

const RestaurantPage = () => {
	return (
		<div>
			<Helmet>
				<title>Jaegar Resto | Настройки | Ресторан</title>
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
			<h1 style={{ color: '#fff' }}>Ресторан</h1>
		</div>
	)
}

export default RestaurantPage
