import styles from './other.module.css'

export const Other = (props) => {
	return (
		<>
			<h2 className={styles.product__title}>{props.title}</h2>
			<p className={styles.product__description}>{props.description}</p>
		</>
	)
}
