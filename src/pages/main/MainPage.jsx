import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../components/header/Header'
import Products from '../../components/products/Products'
import AppLayout from '../../layouts/AppLayout'

const MainPage = () => {
	return (
		<AppLayout>
			<Helmet>
				<title>Jaegar Resto | Главная</title>
				<meta
					name='description'
					content='Ресторан Jaegar Resto – это изысканные блюда, уютная атмосфера и сервис высшего класса. Забронируйте столик, изучите меню и насладитесь лучшими гастрономическими впечатлениями.'
				/>
				<meta
					name='keywords'
					content='ресторан, Jaegar Resto, изысканная кухня, гурман, бронирование столиков, доставка еды, гастрономия, обед, ужин, вечер в ресторане, кулинарные впечатления'
				/>
			</Helmet>
			<Header />
			<Products />
		</AppLayout>
	)
}
export default MainPage
