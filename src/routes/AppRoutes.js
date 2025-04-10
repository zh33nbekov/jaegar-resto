import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
		<BrowserRouter>
			<Routes>
				<Route path={NAVBAR_ROUTE_KEYS.HOME} element={<MainPage />}></Route>
				<Route
					path={NAVBAR_ROUTE_KEYS.DISCOUNT}
					element={<DiscountPage />}
				/>
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
		</BrowserRouter>
	)
}

export default AppRoutes

// import React, { lazy, Suspense } from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { NAVBAR_ROUTE_KEYS } from '../constants/navbar'

// // Ленивая загрузка компонентов
// const MainPage = lazy(() => import('../pages/main/MainPage'))
// const DiscountPage = lazy(() => import('../pages/discount/DiscountPage'))
// const SettingsPage = lazy(() => import('../pages/settings/SettingsPage'))
// const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'))
// const AppereancePage = lazy(() =>
// 	import('../pages/settings/pages/appereance/AppereancePage')
// )
// const RestaurantPage = lazy(() =>
// 	import('../pages/settings/pages/restaurant/RestaurantPage')
// )
// const ManagementPage = lazy(() =>
// 	import('../pages/settings/pages/management/ManagementPage')
// )
// const NotificationsPage = lazy(() =>
// 	import('../pages/settings/pages/notifications/NotificationsPage')
// )
// const SecurityPage = lazy(() =>
// 	import('../pages/settings/pages/security/SecurityPage')
// )
// const AboutUsPage = lazy(() =>
// 	import('../pages/settings/pages/about-us/AboutUsPage')
// )

// const router = createBrowserRouter([
// 	{
// 		path: NAVBAR_ROUTE_KEYS.HOME,
// 		element: (
// 			<Suspense
// 				fallback={
// 					<div className='spinnerWrapper'>
// 						<div className='spinner' />
// 					</div>
// 				}
// 			>
// 				<MainPage />
// 			</Suspense>
// 		),
// 	},
// 	{
// 		path: NAVBAR_ROUTE_KEYS.DISCOUNT,
// 		element: (
// 			<Suspense
// 				fallback={
// 					<div className='spinnerWrapper'>
// 						<div className='spinner' />
// 					</div>
// 				}
// 			>
// 				<DiscountPage />
// 			</Suspense>
// 		),
// 	},
// 	{
// 		path: NAVBAR_ROUTE_KEYS.DASHBOARD,
// 		element: (
// 			<Suspense
// 				fallback={
// 					<div className='spinnerWrapper'>
// 						<div className='spinner' />
// 					</div>
// 				}
// 			>
// 				<DashboardPage />
// 			</Suspense>
// 		),
// 	},
// 	{
// 		path: NAVBAR_ROUTE_KEYS.SETTINGS,
// 		element: (
// 			<Suspense
// 				fallback={
// 					<div className='spinnerWrapper'>
// 						<div className='spinner' />
// 					</div>
// 				}
// 			>
// 				<SettingsPage />
// 			</Suspense>
// 		),
// 		children: [
// 			{
// 				path: NAVBAR_ROUTE_KEYS.APPEREANCE,
// 				element: (
// 					<Suspense
// 						fallback={
// 							<div className='spinnerWrapper'>
// 								<div className='spinner' />
// 							</div>
// 						}
// 					>
// 						<AppereancePage />
// 					</Suspense>
// 				),
// 			},
// 			{
// 				path: NAVBAR_ROUTE_KEYS.RESTAURANT,
// 				element: (
// 					<Suspense
// 						fallback={
// 							<div className='spinnerWrapper'>
// 								<div className='spinner' />
// 							</div>
// 						}
// 					>
// 						<RestaurantPage />
// 					</Suspense>
// 				),
// 			},
// 			{
// 				path: NAVBAR_ROUTE_KEYS.MANAGEMENT,
// 				element: (
// 					<Suspense
// 						fallback={
// 							<div className='spinnerWrapper'>
// 								<div className='spinner' />
// 							</div>
// 						}
// 					>
// 						<ManagementPage />
// 					</Suspense>
// 				),
// 			},
// 			{
// 				path: NAVBAR_ROUTE_KEYS.NOTIFICATIONS,
// 				element: (
// 					<Suspense
// 						fallback={
// 							<div className='spinnerWrapper'>
// 								<div className='spinner' />
// 							</div>
// 						}
// 					>
// 						<NotificationsPage />
// 					</Suspense>
// 				),
// 			},
// 			{
// 				path: NAVBAR_ROUTE_KEYS.SECURITY,
// 				element: (
// 					<Suspense
// 						fallback={
// 							<div className='spinnerWrapper'>
// 								<div className='spinner' />
// 							</div>
// 						}
// 					>
// 						<SecurityPage />
// 					</Suspense>
// 				),
// 			},
// 			{
// 				path: NAVBAR_ROUTE_KEYS.ABOUT_US,
// 				element: (
// 					<Suspense
// 						fallback={
// 							<div className='spinnerWrapper'>
// 								<div className='spinner' />
// 							</div>
// 						}
// 					>
// 						<AboutUsPage />
// 					</Suspense>
// 				),
// 			},
// 		],
// 	},
// ])

// const AppRoutes = () => {
// 	return <RouterProvider router={router} />
// }

// export default AppRoutes
