import React, { useState, useEffect } from 'react';
import logo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import SectionHome from '../../components/Section';
import Card from '../../components/Card';
import Button from '../../components/Button';
import arrowIcon from '../../../assets/icons/right-arrow 1.svg';
import api from '../../../services/api';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { NewPasswordSchema } from '../../../utils/validations/NewPasswordValidation';
import useWindowDimensions from '../../../utils/hooks/useWindowDimensions';

const RecoveryPass = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const { width, height } = useWindowDimensions();

	const history = useHistory();

	let { temporaryPass } = useParams<{ temporaryPass: string }>();

	const validateForm = async (form: any) => {
		return await NewPasswordSchema.validate(form, { abortEarly: false }).then(
			(res: any) => {
				return res;
			}
		);
	};

	function handleRecoveryPass(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		NewPasswordSchema.validate(
			{ username, password, password2 },
			{ abortEarly: false }
		)
			.then((res: any) => {
				api
					.post(`altera-senha?senhaTemporaria=${temporaryPass}`, {
						senha: res.password,
						usuario: res.username,
					})
					.then((res) => {
						history.push(`/login`);
					})
					.catch((err) => {
						toast.error(err.message);
					});
			})
			.catch((err: any) => {
				toast.error(err.message);
			});
	}

	return (
		<>
			<ToastContainer />
			<SectionHome background='purple'>
				<header>
					<Link className='link' to='/'>
						<img src={logo} alt='Gama Academy' />
					</Link>
				</header>
				<div className='main'>
					<div className='form'>
						<Card>
							<form onSubmit={handleRecoveryPass}>
								<h2 className='homeFormTitle'>Esqueci Minha Senha</h2>
								<h6 className='subtitulo'>
									Insira novamente seu login e sua nova senha!
								</h6>
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
								<input
									type='password'
									placeholder='Digite sua nova senha'
									name='password'
									id='password'
									value={password}
									onChange={(e) => {
										setPassword(e.target.value.trim());
									}}
								/>
								<input
									type='password'
									placeholder='Confirme sua nova senha'
									name='password2'
									id='password2'
									value={password2}
									onChange={(e) => {
										setPassword2(e.target.value.trim());
									}}
								/>
								<Button
									text='Enviar'
									textColor='white'
									textSize={17}
									textWeight={500}
									backgroundColor='#68DE5A'
									icon={arrowIcon}
									widthSize={width <= 1024 ? 240 : 276.74}
									heightSize={47.66}
									type='submit'
								></Button>
							</form>
						</Card>
					</div>
				</div>
			</SectionHome>
		</>
	);
};

export default RecoveryPass;
