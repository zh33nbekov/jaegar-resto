import clsx from 'clsx'
import { AppLogo } from '../../assets/icons/navbar'
import styles from './footer.module.css'

const Footer = () => {
	const fullYear = new Date().getFullYear()
	return (
		<footer className={clsx(styles.footer)}>
			<div className={styles.footer__top}>
				<div className={styles.footer__block}>
					<div className={styles.footer__logo}>
						<AppLogo />
					</div>
					<p className={styles.footer__description}>
						Добро пожаловать в наш ресторан! Наслаждайтесь лучшими блюдами
						и уютной атмосферой каждый день.
					</p>
				</div>
				<div className={styles.footer__block}>
					<h4 className={styles.footer__heading}>Навигация</h4>
					<ul className={styles.footer__list}>
						<li className={styles['footer__list-item']}>
							<a className={styles['footer__list-link']} href='/'>
								Главная
							</a>
						</li>
						<li className={styles['footer__list-item']}>
							<a className={styles['footer__list-link']} href='/menu'>
								Меню
							</a>
						</li>
						<li className={styles['footer__list-item']}>
							<a className={styles['footer__list-link']} href='/about'>
								О нас
							</a>
						</li>
						<li className={styles['footer__list-item']}>
							<a className={styles['footer__list-link']} href='/contact'>
								Контакты
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.footer__block}>
					<h4 className={styles.footer__heading}>Контакты</h4>
					<ul className={styles.footer__list}>
						<li className={styles['footer__list-item']}>
							<a
								className={styles['footer__list-link']}
								href='tel:+996703001555'
							>
								+996 (703) 001-555
							</a>
						</li>
						<li className={styles['footer__list-item']}>
							<a
								className={styles['footer__list-link']}
								href='mailto:info@restaurant.ru'
							>
								info@restaurant.ru
							</a>
						</li>
						<li className={styles['footer__list-item']}>
							<a
								className={styles['footer__list-link']}
								href='mailto:info@restaurant.ru'
							>
								г. Бишкек
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.footer__block}>
					<h4 className={styles.footer__heading}>Мы в соцсетях</h4>
					<ul className={styles.footer__list}>
						<li className={styles['footer__list-item']}>
							<a className={styles['footer__list-link']} href='/'>
								Facebook
							</a>
						</li>
						<li className={styles['footer__list-item']}>
							<a className={styles['footer__list-link']} href='/'>
								Instagram
							</a>
						</li>
					</ul>
				</div>
			</div>
			<hr className={styles.footer__line} />
			<div className={styles.footer__bottom}>
				<p className={styles.footer__policy}>
					© {fullYear} Jaegar Resto. <br /> Все права защищены.
				</p>
			</div>
		</footer>
	)
}

export default Footer
