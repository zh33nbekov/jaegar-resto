import clsx from 'clsx'
import { Link } from 'react-router-dom'
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
							<Link className={styles['footer__list-link']}>
								Главная
							</Link>
						</li>
						<li className={styles['footer__list-item']}>
							<Link className={styles['footer__list-link']}>Меню</Link>
						</li>
						<li className={styles['footer__list-item']}>
							<Link
								className={styles['footer__list-link']}
								href='/about'
							>
								О нас
							</Link>
						</li>
						<li className={styles['footer__list-item']}>
							<Link
								className={styles['footer__list-link']}
								href='/contact'
							>
								Контакты
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.footer__block}>
					<h4 className={styles.footer__heading}>Контакты</h4>
					<ul className={styles.footer__list}>
						<li className={styles['footer__list-item']}>
							<Link
								to='tel:+996999555999'
								className={styles['footer__list-link']}
							>
								+996 (999) 555-999
							</Link>
						</li>
						<li className={styles['footer__list-item']}>
							<Link
								to='mailto:jaegar-resto@gmail.com'
								className={styles['footer__list-link']}
							>
								jaegar-resto@gmail.com
							</Link>
						</li>
						<li className={styles['footer__list-item']}>
							<Link className={styles['footer__list-link']}>
								г. Бишкек
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.footer__block}>
					<h4 className={styles.footer__heading}>Мы в соцсетях</h4>
					<ul className={styles.footer__list}>
						<li className={styles['footer__list-item']}>
							<Link className={styles['footer__list-link']}>
								Facebook
							</Link>
						</li>
						<li className={styles['footer__list-item']}>
							<Link className={styles['footer__list-link']}>
								Instagram
							</Link>
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
