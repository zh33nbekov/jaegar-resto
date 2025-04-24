import clsx from 'clsx'
import styles from './interactive-button.module.css'

export const InteractiveButton = ({ children, ...props }) => {
	return (
		<button
			id={props.label}
			onClick={() => props.onClick(props.index)}
			className={clsx(styles['interactive-button'], props.className)}
		>
			{children}
		</button>
	)
}
