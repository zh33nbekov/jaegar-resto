import { Dashboard } from '../../assets/icons/navbar/Dashboard'
import { Discount } from '../../assets/icons/navbar/Discount'
import { Home } from '../../assets/icons/navbar/Home'
import { Message } from '../../assets/icons/navbar/Message'
import { Notification } from '../../assets/icons/navbar/Notification'
import { Settings } from '../../assets/icons/navbar/Settings'
import { AboutUs } from '../../assets/icons/navigation/AboutUs'
import { Heart } from '../../assets/icons/navigation/Heart'
import { Management } from '../../assets/icons/navigation/Management'
import { Notifications } from '../../assets/icons/navigation/Notifications'
import { Restaurant } from '../../assets/icons/navigation/Restaurant'
import { Security } from '../../assets/icons/navigation/Security'

export const NAVBAR_ROUTE_KEYS = {
	HOME: '/',
	DASHBOARD: '/dashboard',
	DISCOUNT: '/discounts',
	SETTINGS: '/settings',
	RESTAURANT: 'restaurant',
	MANAGEMENT: 'management',
	NOTIFICATIONS: '/notifications',
	ABOUT_US: 'about-us',
	CHAT: '/chat',
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
		path: NAVBAR_ROUTE_KEYS.CHAT,
	},
	{
		srOnly: 'Уведомления',
		icon: Notification,
		path: NAVBAR_ROUTE_KEYS.NOTIFICATIONS,
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
		icon: Notifications,
	},
	{
		id: 4,
		name: 'Защита',
		description: 'Настройка пароля, PIN-кода и т.д',
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
