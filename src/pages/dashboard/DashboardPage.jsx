import { Helmet } from 'react-helmet'
import AppLayout from '../../layouts/AppLayout'

const DasboardPage = () => {
	return (
		<AppLayout>
			<Helmet>
				<title>Jaegar Resto | Панель администратора</title>
				<meta
					name='description'
					content='Панель администратора Jaegar Resto – централизованное управление рестораном, включая управление пользователями, настройками меню, отчетами и другими важными функциями для эффективного администрирования.'
				/>
				<meta
					name='keywords'
					content='панель администратора, Jaegar Resto, управление рестораном, пользователи, настройки меню, отчеты, администрирование'
				/>
				<meta name='author' content='Jaegar Resto' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Helmet>
		</AppLayout>
	)
}

export default DasboardPage
