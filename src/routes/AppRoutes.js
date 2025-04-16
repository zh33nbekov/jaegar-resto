import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NAVBAR_ROUTE_KEYS } from '../constants/navbar'

const MainPage = lazy(() => import('../pages/main/MainPage'))
const DiscountPage = lazy(() => import('../pages/discount/DiscountPage'))
const SettingsPage = lazy(() => import('../pages/settings/SettingsPage'))
const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'))
const AppereancePage = lazy(() =>
	import('../pages/settings/pages/appereance/AppereancePage')
)
const RestaurantPage = lazy(() =>
	import('../pages/settings/pages/restaurant/RestaurantPage')
)
const ManagementPage = lazy(() =>
	import('../pages/settings/pages/management/ManagementPage')
)
const NotificationsPage = lazy(() =>
	import('../pages/settings/pages/notifications/NotificationsPage')
)
const SecurityPage = lazy(() =>
	import('../pages/settings/pages/security/SecurityPage')
)
const AboutUsPage = lazy(() =>
	import('../pages/settings/pages/about-us/AboutUsPage')
)

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={NAVBAR_ROUTE_KEYS.HOME} element={<MainPage />}></Route>
			<Route path={NAVBAR_ROUTE_KEYS.DISCOUNT} element={<DiscountPage />} />
			<Route
				path={NAVBAR_ROUTE_KEYS.DASHBOARD}
				element={<DashboardPage />}
			/>
			<Route path={NAVBAR_ROUTE_KEYS.SETTINGS} element={<SettingsPage />}>
				<Route
					path={NAVBAR_ROUTE_KEYS.APPEREANCE}
					element={<AppereancePage />}
				/>
				<Route
					path={NAVBAR_ROUTE_KEYS.RESTAURANT}
					element={<RestaurantPage />}
				/>
				<Route
					path={NAVBAR_ROUTE_KEYS.MANAGEMENT}
					element={<ManagementPage />}
				/>
				<Route
					path={NAVBAR_ROUTE_KEYS.NOTIFICATIONS}
					element={<NotificationsPage />}
				/>
				<Route
					path={NAVBAR_ROUTE_KEYS.SECURITY}
					element={<SecurityPage />}
				/>
				<Route
					path={NAVBAR_ROUTE_KEYS.ABOUT_US}
					element={<AboutUsPage />}
				/>
			</Route>
		</Routes>
	)
}

export default AppRoutes
