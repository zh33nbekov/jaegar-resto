import clsx from 'clsx'
import styles from './interactive-button.module.css'

export const InteractiveButton = ({ children, ...props }) => {
	const isActive = props.active === props.index
	return (
		<button
			id={props.label}
			onClick={() => props.onClick(props.index)}
			className={clsx(styles['interactive-button'], props.className, {
				active: isActive,
			})}
		>
			{children}
		</button>
	)
}
