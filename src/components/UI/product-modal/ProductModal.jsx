import { Backdrop } from '../backdrop/Backdrop'
import { Modal } from '../modal/Modal'

export const ProductModal = ({ open, onClose }) => {
	if (!open) return

	return (
		<>
			<Backdrop open={open} onClose={onClose} />
			<Modal open={open}>
				<p style={{ color: '#fff' }}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
					aspernatur iste dicta tempora obcaecati et numquam minima iure
					minus asperiores velit animi vel vero ullam, assumenda dolorem
					modi? Sed labore iusto harum alias sapiente! Pariatur alias dolor
					laudantium, voluptas asperiores minus! Voluptatibus ullam
					accusantium obcaecati laboriosam fuga consequatur quisquam
					expedita, soluta repudiandae rem rerum ad architecto culpa,
					commodi ipsum minima magni voluptates ut voluptate consectetur
					modi aliquid dolores! Voluptatibus quis non corporis doloribus
					optio, possimus dolorem. Eveniet amet id illo facere, vero esse,
					perspiciatis quisquam labore aliquam dolor, possimus modi
					reiciendis illum. Veritatis molestiae beatae, velit quo
					voluptatibus corrupti consectetur.
				</p>
			</Modal>
		</>
	)
}
