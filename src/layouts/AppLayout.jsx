import { BasketButton } from '../components/basket-button/BasketButton'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import NavbarProvider from '../providers/NavbarProvider'

const styles = {
	width: '100%',
	height: '100%',
	display: 'flex',
}

const AppLayout = ({ children }) => {
	return (
		<>
			<div style={styles}>
				<NavbarProvider>
					<Navbar />
				</NavbarProvider>
				<main className='wrapper'>
					<Header />
					{children}
					<Footer />
					<BasketButton />
				</main>
			</div>
		</>
	)
}

export default AppLayout
