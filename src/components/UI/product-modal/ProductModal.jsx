import { Backdrop } from '../backdrop/Backdrop'
import { Modal } from '../modal/Modal'

export const ProductModal = ({ open, onClose }) => {
	if (!open) return

	return (
		<>
			<Backdrop open={open} onClose={onClose} />
			<Modal open={open}>
				
			</Modal>
		</>
	)
}
