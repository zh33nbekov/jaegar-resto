import styles from './burger-menu.module.css'

const BurgerMenu = ({ isOpen }) => {
	return (
		<div className={`${styles['burger-menu']} ${isOpen ? styles.open : ''}`}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}
export default BurgerMenu
