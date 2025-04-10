import { useState } from 'react'

export const useBackdrop = () => {
	const [backdropVisible, setBackdropVisible] = useState(false)

	return { backdropVisible }
}
