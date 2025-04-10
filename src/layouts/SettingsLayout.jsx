import React from 'react'
import Navbar from '../components/navbar/Navbar'

const styles = {
	width: '100%',
	height: '100%',
	display: 'flex',
}
export const SettingsLayout = ({ children }) => {
	return (
		<div style={styles}>
			<Navbar />
			<div className='settings-wrapper'>{children}</div>
		</div>
	)
}
