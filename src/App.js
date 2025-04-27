import { lazy } from 'react'
import { Progress } from './components/UI'
import { withLazy } from './HOC/withLazy'
import AppRoutes from './routes/AppRoutes'
import { useSidebarStore } from './store/sidebar'

const LazyOrders = lazy(() =>
	import(/* webpackChunkName: "orders" */ './components/orders/Orders')
)
const Orders = withLazy(LazyOrders)

const App = () => {
	const sidebarStore = useSidebarStore()
	return (
		<>
			<Progress />
			{sidebarStore.open && <Orders />}
			<AppRoutes />
		</>
	)
}

export default App
