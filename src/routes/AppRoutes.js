import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_KEYS } from '../constants/common/RouteKeys';
import DashboardPage from '../pages/dashboard/DashboardPage';
import DiscountPage from '../pages/discount/DiscountPage';
import LoginPage from '../pages/login/Login';
import MainPage from '../pages/main/MainPage';
import PaymentPage from '../pages/payment/PaymentPage';
import SettingsPage from '../pages/settings/SettingsPage';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={ROUTE_KEYS.HOME} element={<MainPage />}>
				{/*  */}
			</Route>
			<Route path={ROUTE_KEYS.DISCOUNT} element={<DiscountPage />} />
			<Route path={ROUTE_KEYS.DASHBOARD} element={<DashboardPage />} />
			<Route path={ROUTE_KEYS.SETTINGS} element={<SettingsPage />} />
			<Route path={ROUTE_KEYS.PAYMENT} element={<PaymentPage />} />
			<Route path={ROUTE_KEYS.AUTH} element={<LoginPage />} />
		</Routes>
	);
};

export default AppRoutes;
