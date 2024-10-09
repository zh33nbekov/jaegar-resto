import React from 'react';
import Navbar from '../components/navbar/Navbar';

const AppLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='wrapper'>{children}</main>
		</>
	);
};

export default AppLayout;
