import React, { useState, useEffect } from 'react';
import logo from '../../../assets/images/logo.svg';
import SectionHome from '../../components/Section';
import Card from '../../components/Card';
import Button from '../../components/Button';
import arrowIcon from '../../../assets/icons/right-arrow 1.svg';
import api from '../../../services/api';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const RecoveryPass = () => {
	const [username, setUsername] = useState('');
	const [email, setemail] = useState('');

	const history = useHistory();

	function handleRecoveryPass(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (email.length === 0) {
			return toast.error('Por favor insira seu email');
		}

		if (username.length === 0) {
			return toast.error('Por favor insira seu usuário');
		}

		api
			.post(`nova-senha`, { email: 'email@dominio.com', login: username })
			.then((res) => {
				console.log(res);
				history.push(`/recoveryPass/${res.data}`);
			})
			.catch((err) => {
				toast.error(err.message);
			});
	}

	return (
		<>
			<ToastContainer />
			<SectionHome background='purple'>
				<header>
					<img src={logo} alt='Gama Academy' />
				</header>
				<div className='main'>
					<div className='form'>
						<Card>
							<form onSubmit={handleRecoveryPass}>
								<h2 className='homeFormTitle'>Esqueci Minha Senha</h2>
								<h6 className='subtitulo'>Confirme seu email e seu login</h6>
								<input
									type='text'
									placeholder='Insira seu email'
									name='email'
									id='email'
									onChange={(e) => {
										setemail(e.target.value);
									}}
									value={email}
								/>
								<input
									type='login'
									placeholder='Digite seu login'
									name='login'
									id='login'
									value={username}
									onChange={(e) => {
										setUsername(e.target.value);
									}}
								/>
								<Button
									text='Enviar'
									textColor='white'
									textSize={17}
									textWeight={500}
									backgroundColor='#68DE5A'
									icon={arrowIcon}
									widthSize={276.74}
									heightSize={47.66}
									type='submit'
								></Button>
								<p className='link'>
									<Link className='link' to='/login'>
										Voltar para o login{' > '}
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

export default RecoveryPass;
