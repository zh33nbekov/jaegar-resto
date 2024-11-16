import React, { memo, useEffect, useState } from 'react';
import AppLogo from '../../../assets/icons/logo.svg';
import styles from './Preloader.module.css';

const Preloader = () => {
	const [isPreloader, setIsPreloader] = useState(false);

	useEffect(() => {
		setIsPreloader(true);
		const preloaderId = setTimeout(() => {
			setIsPreloader(false);
		}, 3000);

		return () => {
			clearTimeout(preloaderId);
		};
	}, []);

	if (!isPreloader) {
		return null;
	}

	return (
		<div className={styles.preloader}>
			<img src={AppLogo} alt='' />
		</div>
	);
};

export default memo(Preloader);
