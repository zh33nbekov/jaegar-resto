import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router-dom'
import { SettingsLayout } from '../../layouts/SettingsLayout'
import styles from './SettingsPage.module.css'
import SettingsNavbar from './navbar/SettingsNavbar'

const SettingsPage = () => {
	return (
		<SettingsLayout>
			<Helmet>
				<title>Jaegar Resto | Настройки</title>
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

			<h1 className={styles.title}>Настройки</h1>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					columnGap: '24px',
					alignItems: '',
					width: '100%',
					height: '670px',
				}}
			>
				<SettingsNavbar />
				<Outlet />
			</div>
		</SettingsLayout>
	)
}

export default SettingsPage
