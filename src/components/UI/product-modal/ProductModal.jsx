import { Backdrop } from '../backdrop/Backdrop'
import { Modal } from '../modal/Modal'
import styles from './product-modal.module.css'

export const ProductModal = ({ product, onClose }) => {
	console.log(product)
	return (
		<>
			<Backdrop open={true} onClose={onClose} />
			<Modal open={true}>
				<div className={styles['product-modal']}>
					<img src={product.imageURL} alt='' />
					<h4>{product.title}</h4>
					<p>{product?.description}</p>
					<span>{product.price} сом</span>
				</div>
			</Modal>
		</>
	)
}
