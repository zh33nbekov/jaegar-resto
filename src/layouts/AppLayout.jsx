import React from 'react'
import Navbar from '../components/navbar/Navbar'

const styles = {
	width: '100%',
	height: '100%',
	display: 'flex',
}
const AppLayout = ({ children }) => {
	return (
		<div style={styles}>
			<Navbar />
			<main className='wrapper'>{children}</main>
		</div>
	)
}

export default AppLayout
