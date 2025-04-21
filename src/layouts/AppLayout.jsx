import { lazy } from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'

const Footer = lazy(() => import('../components/footer/Footer'))
const styles = {
	width: '100%',
	height: '100%',
	display: 'flex',
}

const AppLayout = ({ children }) => {
	return (
		<>
			<div style={styles}>
				<Navbar />
				<main className='wrapper'>
					<Header />
					{children}
					<Footer />
				</main>
			</div>
		</>
	)
}

export default AppLayout
