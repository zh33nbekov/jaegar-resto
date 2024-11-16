import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';

const navigationContext = createContext(false);
export const useNavigationContext = () => useContext(navigationContext);

const NavigationContextProvider = ({ children }) => {
	const [isSideBarVisible, setIsSideBarVisible] = useState(false);
	const [sideBarAnimationClass, setSideBarAnimationClass] = useState('');

	const showNavigation = useCallback(() => {
		setIsSideBarVisible(true);
	}, []);

	const hideNavigation = useCallback(() => {
		setSideBarAnimationClass('closed');
		const sideBarId = setTimeout(() => {
			setIsSideBarVisible(false);
			setSideBarAnimationClass('');
		}, 500);

		return () => {
			clearTimeout(sideBarId);
		};
	}, []);

	useEffect(() => {
		if (window.innerWidth > 1400) {
			setIsSideBarVisible(true);
			return;
		}
		if (window.innerWidth < 1400) {
			setIsSideBarVisible(false);
		}
	}, []);

	const values = {
		isSideBarVisible,
		sideBarAnimationClass,
		showNavigation,
		hideNavigation,
	};
	return (
		<navigationContext.Provider value={values}>
			{children}
		</navigationContext.Provider>
	);
};

export default NavigationContextProvider;
