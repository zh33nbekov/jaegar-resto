import { lazy, useEffect, useRef, useState } from 'react'
import { useIntersection } from 'react-use'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'

const Footer = lazy(() => import('../components/footer/Footer'))
const styles = {
	width: '100%',
	height: '100%',
	display: 'flex',
}
const lineStyles = {
	border: 'none',
	height: '1px',
}

const AppLayout = ({ children }) => {
	const [isIntersecting, setIsIntersecting] = useState(false)
	const footerTriggerRef = useRef(null)
	const intersection = useIntersection(footerTriggerRef, {})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setIsIntersecting(true)
		} else {
			setIsIntersecting(false)
		}
	}, [intersection?.isIntersecting])

	return (
		<>
			<div style={styles}>
				<Navbar />
				<main className='wrapper'>
					<Header />
					{children}
					<hr ref={footerTriggerRef} style={lineStyles} />
					{isIntersecting && <Footer />}
				</main>
			</div>
		</>
	)
}

export default AppLayout
