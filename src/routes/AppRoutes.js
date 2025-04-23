import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NAVBAR_ROUTE_KEYS } from '../constants/navbar'
import { withLazy } from '../HOC/withLazy'
import MainPage from '../pages/main/MainPage'

const LazyMainPage = lazy(() => import('../pages/main/MainPage'))
// const MainPage = withLazy(LazyMainPage)
const LazyDiscountPage = lazy(() => import('../pages/discount/DiscountPage'))
const DiscountPage = withLazy(LazyDiscountPage)
const LazyDashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'))
const DashboardPage = withLazy(LazyDashboardPage)
const LazyChatPage = lazy(() => import('../pages/chat/ChatPage'))
const ChatPage = withLazy(LazyChatPage)
const LazyNotificationsPage = lazy(() =>
	import('../pages/notifications/NotificationsPage')
)
const NotificationsPage = withLazy(LazyNotificationsPage)
const LazySettingsPage = lazy(() => import('../pages/settings/SettingsPage'))
const SettingsPage = withLazy(LazySettingsPage)
const LazyRestaurantPage = lazy(() =>
	import('../pages/settings/pages/restaurant/RestaurantPage')
)
const RestaurantPage = withLazy(LazyRestaurantPage)
const LazyManagementPage = lazy(() =>
	import('../pages/settings/pages/management/ManagementPage')
)
const ManagementPage = withLazy(LazyManagementPage)
const LazyAboutUsPage = lazy(() =>
	import('../pages/settings/pages/about-us/AboutUsPage')
)
const AboutUsPage = withLazy(LazyAboutUsPage)
const LazyDebuggerPage = lazy(() => import('../pages/debugger/DebuggerPage'))
const DebuggerPage = withLazy(LazyDebuggerPage)

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={NAVBAR_ROUTE_KEYS.HOME} element={<MainPage />}></Route>
			<Route path={NAVBAR_ROUTE_KEYS.DISCOUNT} element={<DiscountPage />} />
			<Route path={NAVBAR_ROUTE_KEYS.CHAT} element={<ChatPage />} />
			<Route
				path={NAVBAR_ROUTE_KEYS.NOTIFICATIONS}
				element={<NotificationsPage />}
			/>
			<Route
				path={NAVBAR_ROUTE_KEYS.DASHBOARD}
				element={<DashboardPage />}
			/>
			<Route path={NAVBAR_ROUTE_KEYS.SETTINGS} element={<SettingsPage />}>
				<Route
					path={NAVBAR_ROUTE_KEYS.RESTAURANT}
					element={<RestaurantPage />}
				/>
				<Route
					path={NAVBAR_ROUTE_KEYS.MANAGEMENT}
					element={<ManagementPage />}
				/>
				<Route
					path={NAVBAR_ROUTE_KEYS.ABOUT_US}
					element={<AboutUsPage />}
				/>
			</Route>
			<Route path='/debugger' element={<DebuggerPage />} />
		</Routes>
	)
}

export default AppRoutes
