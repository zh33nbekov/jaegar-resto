import { lazy } from 'react'
import { Preloader } from './components/UI'
import NavbarProvider from './providers/NavbarProvider'
import AppRoutes from './routes/AppRoutes'

const Orders = lazy(() => import('./components/orders/Orders'))

const AppContent = () => {
	return (
		<>
			<Preloader />
			<Orders />
		</>
	)
}

const App = () => {
	return (
		<NavbarProvider>
			<AppContent />
			<AppRoutes />
		</NavbarProvider>
	)
}

export default App
