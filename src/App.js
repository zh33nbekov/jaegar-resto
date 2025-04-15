import Orders from './components/orders/Orders'
import { Preloader } from './components/UI'
import NavbarProvider from './providers/NavbarProvider'
import AppRoutes from './routes/AppRoutes'

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
