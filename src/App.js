import { lazy } from 'react'
import { Preloader } from './components/UI'
import { withLazy } from './HOC/withLazy'
import NavbarProvider from './providers/NavbarProvider'
import AppRoutes from './routes/AppRoutes'
import { useSidebarStore } from './store/sidebar'

const LazyOrders = lazy(() => import('./components/orders/Orders'))
const Orders = withLazy(LazyOrders)

const AppContent = () => {
	const sidebarStore = useSidebarStore()
	return (
		<>
			<Preloader />
			{sidebarStore.open && <Orders />}
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
