import { lazy } from 'react'
import { Progress } from './components/UI'
import { withLazy } from './HOC/withLazy'
import NavbarProvider from './providers/NavbarProvider'
import AppRoutes from './routes/AppRoutes'
import { useSidebarStore } from './store/sidebar'

const LazyOrders = lazy(() => import('./components/orders/Orders'))
const Orders = withLazy(LazyOrders)

const App = () => {
	const sidebarStore = useSidebarStore()
	return (
		<NavbarProvider>
			<Progress />
			{sidebarStore.open && <Orders />}
			<AppRoutes />
		</NavbarProvider>
	)
}

export default App
