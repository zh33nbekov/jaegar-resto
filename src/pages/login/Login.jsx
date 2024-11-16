import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityRounded';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const LogInPage = () => {
	const [visibilityPassword, setVisibilityPassword] = useState(false);
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();
	const togglePasswordInput = (event) => {
		event.preventDefault();
		const passwordID = setTimeout(() => {
			setVisibilityPassword(false);
		}, 6000);
		setVisibilityPassword((prevState) => (prevState ? false : true));

		return () => {
			clearTimeout(passwordID);
		};
	};
	const inputsChangeHandler = (name) => {
		return (event) => {
			const { value } = event.target;
			setData((prevData) => ({ ...prevData, [name]: value }));
		};
	};
	const navigateToHomePage = (event) => {
		event.preventDefault();
		navigate('/');
	};
	return (
		<div className={styles.login}>
			<form className={styles.login__form} onSubmit={() => {}}>
				<button className={styles.closeButton} onClick={navigateToHomePage}>
					<CloseRoundedIcon style={{ width: '30px', height: '30px' }} />
				</button>
				<h1 className={styles.login__formTitle}>
					Войдите <br /> в учетную запись
				</h1>
				<div className={styles.login__formInput}>
					<input type='email' id='email' placeholder=' ' required />
					<label htmlFor='email'>Enter your e-mail...</label>
				</div>
				<div className={styles.login__formInput}>
					<input type='password' id='password' placeholder=' ' required />
					<label htmlFor='password'>Enter your password...</label>
				</div>
				<NavLink to='/register' className={styles.login__link}>
					У вас нет учетной записи?
				</NavLink>
				<div className={styles.login__through}>
					<button onClick={(event) => event.preventDefault()}>
						<GoogleIcon style={{ width: '33px', height: '33px' }} />
					</button>
					<button onClick={(event) => event.preventDefault()}>
						<EmailIcon style={{ width: '33px', height: '33px' }} />
					</button>
					<button onClick={(event) => event.preventDefault()}>
						<GitHubIcon style={{ width: '33px', height: '33px' }} />
					</button>
				</div>
				<button className={styles.login__formButton}>Login</button>
			</form>
		</div>
	);
};

export default LogInPage;
