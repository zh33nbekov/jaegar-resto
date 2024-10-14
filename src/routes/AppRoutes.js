import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_KEYS } from '../constants/common/RouteKeys';
import DashboardPage from '../pages/dashboard/DashboardPage';
import DiscountPage from '../pages/discount/DiscountPage';
import LoginPage from '../pages/login/Login';
import MainPage from '../pages/main/MainPage';
import PaymentPage from '../pages/payment/PaymentPage';
import SettingsPage from '../pages/settings/SettingsPage';
import AboutUsPage from '../pages/settings/pages/about-us/AboutUsPage';
import AppereancePage from '../pages/settings/pages/appereance/AppereancePage';
import ManagementPage from '../pages/settings/pages/management/ManagementPage';
import NotificationsPage from '../pages/settings/pages/notifications/NotificationsPage';
import RestaurantPage from '../pages/settings/pages/restaurant/RestaurantPage';
import SecurityPage from '../pages/settings/pages/security/SecurityPage';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={ROUTE_KEYS.HOME} element={<MainPage />}>
				{/*  */}
			</Route>
			<Route path={ROUTE_KEYS.DISCOUNT} element={<DiscountPage />} />
			<Route path={ROUTE_KEYS.DASHBOARD} element={<DashboardPage />} />
			<Route path={ROUTE_KEYS.SETTINGS} element={<SettingsPage />}>
				<Route path={ROUTE_KEYS.APPEREANCE} element={<AppereancePage />} />
				<Route path={ROUTE_KEYS.RESTAURANT} element={<RestaurantPage />} />
				<Route path={ROUTE_KEYS.MANAGEMENT} element={<ManagementPage />} />
				<Route
					path={ROUTE_KEYS.NOTIFICATIONS}
					element={<NotificationsPage />}
				/>
				<Route path={ROUTE_KEYS.SECURITY} element={<SecurityPage />} />
				<Route path={ROUTE_KEYS.ABOUT_US} element={<AboutUsPage />} />
			</Route>
			<Route path={ROUTE_KEYS.PAYMENT} element={<PaymentPage />} />
			<Route path={ROUTE_KEYS.AUTH} element={<LoginPage />} />
		</Routes>
	);
};

export default AppRoutes;
