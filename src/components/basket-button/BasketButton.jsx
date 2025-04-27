import clsx from 'clsx'
import { createPortal } from 'react-dom'
import { ShoppingCart } from '../../assets/icons/common/ShoppingCart'
import { useSidebar } from '../../hooks/useSidebar'
import { useBasketStore } from '../../store/basket'
import { useSidebarStore } from '../../store/sidebar'
import styles from './basket-button.module.css'

export const BasketButton = () => {
	const { toggleSidebar } = useSidebar()
	const sidebarStore = useSidebarStore((state) => state)
	const basketLength = useBasketStore((state) => state.items.length)
	return createPortal(
		<button
			onClick={toggleSidebar}
			data-order-count={basketLength}
			className={clsx(styles['basket-button'], {
				[styles.active]: sidebarStore.open,
			})}
		>
			<span className='sr-only'>Корзина</span>
			<ShoppingCart />
		</button>,
		document.getElementById('basket-button')
	)
}
