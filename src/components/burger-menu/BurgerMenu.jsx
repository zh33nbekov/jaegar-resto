import clsx from 'clsx'
import styles from './burger-menu.module.css'

const BurgerMenu = ({ isOpen }) => {
	return (
		<div className={clsx(styles['burger-menu'], { [styles.open]: isOpen })}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}
export default BurgerMenu
