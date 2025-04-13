import Orders from './components/orders/Orders'
import { Preloader } from './components/UI'
import DishBasketProvider from './context/dishes/DishBasketContext'
import DishesProvider from './context/dishes/DishesContext'
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
		<DishesProvider>
			<SidebarProvider>
				<DishBasketProvider>
					<NavbarProvider>
						<AppContent />
						<AppRoutes />
					</NavbarProvider>
				</DishBasketProvider>
			</SidebarProvider>
		</DishesProvider>
	)
}

export default App
