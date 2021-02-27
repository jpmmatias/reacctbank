import React, { useState, useEffect } from 'react';
import logo from '../../../assets/images/logo.svg';
import SectionHome from '../../components/Section';
import Card from '../../components/Card';
import Button from '../../components/Button';
import arrowIcon from '../../../assets/icons/right-arrow 1.svg';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../services/api';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { IToken } from '../../../types';
import { useDispatch } from 'react-redux';
import { UserInfo } from '../../../store/modules/user/actions';
import useWindowDimensions from '../../../utils/hooks/useWindowDimensions';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setpassword] = useState('');
	const dispatch = useDispatch();
	const { width, height } = useWindowDimensions();
	const history = useHistory();

	const [storage, setStorage] = useState<IToken>((): any => {
		let storageToken = () => localStorage.getItem('@tokenApp');
		return storageToken();
	});

	useEffect(() => {
		!!storage ? history.push('/dashboard') : localStorage.clear();
	}, [storage]);

	function handleLogin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		api
			.post(`login`, { senha: password, usuario: username })
			.then((res) => {
				localStorage.setItem('@tokenApp', res.data.token);
				history.push('/dashboard');
				dispatch(UserInfo(res.data.usuario));
			})
			.catch((err) => {
				toast.error(err.message);
			});
	}
	return (
		<>
			<SectionHome background='purple'>
				<ToastContainer />
				<header>
					<Link className='link' to='/'>
						<img src={logo} alt='Gama Academy' />
					</Link>
				</header>
				<div className='main'>
					<div className='form'>
						<Card>
							<form onSubmit={handleLogin}>
								<h2 className='homeFormTitle'>Faça seu Login</h2>
								<input
									type='text'
									placeholder='Digite seu usuario'
									name='username'
									id='username'
									onChange={(e) => {
										setUsername(e.target.value);
									}}
									value={username}
								/>
								<input
									type='password'
									placeholder='Digite sua senha'
									name='password'
									id='password'
									onChange={(e) => {
										setpassword(e.target.value);
									}}
									value={password}
								/>
								<Button
									text='Continuar'
									textColor='white'
									textSize={17}
									textWeight={500}
									backgroundColor='#68DE5A'
									icon={arrowIcon}
									widthSize={width <= 1024 ? 240 : 276.74}
									heightSize={47.66}
									type='submit'
								></Button>
								<p className='link'>
									<Link className='link' to='/recoveryPass'>
										Esqueci minha senha{' > '}
									</Link>
								</p>
								<p className='link2'>
									<Link className='link' to='/'>
										Ainda não sou cliente{' > '}
									</Link>
								</p>
							</form>
						</Card>
					</div>
				</div>
			</SectionHome>
		</>
	);
};

export default Login;
