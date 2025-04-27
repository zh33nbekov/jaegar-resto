import clsx from 'clsx'

import { NavLink } from 'react-router-dom'
import { SETTINGS_NAVBAR_LINKS } from '../../../constants/navbar'
import styles from './SettingsNavbar.module.css'

const SettingsNavbar = () => {
	return (
		<nav className={styles.navigation}>
			{SETTINGS_NAVBAR_LINKS.map((link) => (
				<li key={link.id} className={`${styles.navigation__item}`}>
					<NavLink
						to={link.path}
						className={({ isActive }) =>
							clsx(styles.navigation__link, {
								[styles.active]: isActive,
							})
						}
					>
						<link.icon />
						<div className={styles.navigation__linkContent}>
							<span className={styles.navigation__linkName}>
								{link.name}
							</span>
							<p className={styles.navigation__linkDescription}>
								{link.description}
							</p>
						</div>
					</NavLink>
				</li>
			))}
		</nav>
	)
}

export default SettingsNavbar
