import { lazy } from 'react'
import { Preloader } from './components/UI'
import { Progress } from './components/UI/progress/Progress'
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
			<Progress />
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
