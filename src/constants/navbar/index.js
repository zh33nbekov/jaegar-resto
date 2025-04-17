import {
	Dashboard,
	Discount,
	Home,
	Message,
	Notification,
	Settings,
} from '../../assets/icons/navbar'
import {
	AboutUs,
	Heart,
	Management,
	Notifications,
	Restaurant,
	Security,
} from '../../assets/icons/navigation'

export const NAVBAR_ROUTE_KEYS = {
	HOME: '/',
	DASHBOARD: '/dashboard',
	DISCOUNT: '/discounts',
	SETTINGS: '/settings',
	APPEREANCE: 'design',
	RESTAURANT: 'restaurant',
	MANAGEMENT: 'management',
	NOTIFICATIONS: 'notifications',
	SECURITY: 'security',
	ABOUT_US: 'about-us',
}

export const NAVBAR_LINKS = [
	{
		srOnly: 'Главная',
		icon: Home,
		path: NAVBAR_ROUTE_KEYS.HOME,
	},
	{
		srOnly: 'Скидки и акции',
		icon: Discount,
		path: NAVBAR_ROUTE_KEYS.DISCOUNT,
	},
	{
		srOnly: 'Панель администратора',
		icon: Dashboard,
		path: NAVBAR_ROUTE_KEYS.DASHBOARD,
	},
	{
		srOnly: 'Чат',
		icon: Message,
		path: '/chat',
	},
	{
		srOnly: 'Уведомление',
		icon: Notification,
		path: '/chat',
	},
	{
		srOnly: 'Настройки',
		icon: Settings,
		path: NAVBAR_ROUTE_KEYS.SETTINGS,
	},
]

export const SETTINGS_NAVBAR_LINKS = [
	{
		id: 0,
		name: 'Дизайн',
		description: 'Темный и светлый режимы, размер шрифта',
		path: NAVBAR_ROUTE_KEYS.APPEREANCE,
		icon: Heart,
	},
	{
		id: 1,
		name: 'Ресторан',
		description: 'Информация о ресторане',
		path: NAVBAR_ROUTE_KEYS.RESTAURANT,
		icon: Restaurant,
	},
	{
		id: 2,
		name: 'Управление продуктами',
		description: 'Управляйте своим продуктом, ценообразованием и т.д',
		path: NAVBAR_ROUTE_KEYS.MANAGEMENT,
		icon: Management,
	},
	{
		id: 3,
		name: 'Уведомления',
		description: 'Настройте свои уведомления',
		path: NAVBAR_ROUTE_KEYS.NOTIFICATIONS,
		icon: Notifications,
	},
	{
		id: 4,
		name: 'Защита',
		description: 'Настройка пароля, PIN-кода и т.д',
		path: NAVBAR_ROUTE_KEYS.SECURITY,
		icon: Security,
	},
	{
		id: 5,
		name: 'О нас',
		description: 'Информация о нас',
		path: NAVBAR_ROUTE_KEYS.ABOUT_US,
		icon: AboutUs,
	},
]
