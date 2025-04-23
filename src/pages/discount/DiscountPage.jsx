import React from 'react'
import { Helmet } from 'react-helmet'
import AppLayout from '../../layouts/AppLayout'

const DiscountPage = () => {
	return (
		<AppLayout>
			<Helmet>
				<title>Jaegar Resto | Скидки и акции</title>
				<meta
					name='description'
					content='Скидки и акции Jaegar Resto – узнайте о текущих предложениях, специальных скидках и акциях для гостей ресторана. Не упустите возможность воспользоваться выгодными предложениями.'
				/>
				<meta
					name='keywords'
					content='скидки, акции, Jaegar Resto, специальные предложения, ресторан, акции для гостей, скидки на блюда'
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

export default DiscountPage
