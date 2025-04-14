import Orders from './components/orders/Orders'
import { Preloader } from './components/UI'
import BasketProvider from './context/basket/BasketContext'
import NavbarProvider from './context/navbar/NavbarContext'
import SidebarProvider from './context/sidebar/SidebarContext'
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
		<SidebarProvider>
			<BasketProvider>
				<NavbarProvider>
					<AppContent />
					<AppRoutes />
				</NavbarProvider>
			</BasketProvider>
		</SidebarProvider>
	)
}

export default App
