import clsx from 'clsx'
import styles from './indicator.module.css'

export const Indicator = ({ position: { width, left }, className }) => (
	<div
		className={clsx(styles.indicator, className)}
		style={{
			left: left,
			width: width,
		}}
	/>
)
