import clsx from 'clsx'
import { AppLogo } from '../../assets/icons/navbar'
import styles from './footer.module.css'

const Footer = () => {
	return (
		<footer className={clsx(styles.footer)}>
			<div className={styles.footer__logo}>
				<AppLogo />
			</div>
		</footer>
	)
}

export default Footer
