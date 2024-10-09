import { BrowserRouter } from 'react-router-dom';
import Backdrop from './components/UI/backdrop/Backdrop';
import Preloader from './components/UI/preloader/Preloader';
import DishBasketContextProvider from './context/dishes/DishBasketContext';
import DishesContextProvider from './context/dishes/DishesContext';
import NavigationContextProvider from './context/navigation/NavigationContext';
import AppRoutes from './routes/AppRoutes';

const AppContent = () => {
	return (
		<div>
			<Backdrop />
			{/* <Preloader /> */}
		</div>
	);
};
const App = () => {
	return (
		<BrowserRouter>
			<DishesContextProvider>
				<NavigationContextProvider>
					<DishBasketContextProvider>
						<AppContent />
						<AppRoutes />
					</DishBasketContextProvider>
				</NavigationContextProvider>
			</DishesContextProvider>
		</BrowserRouter>
	);
};

export default App;
