import React, { useEffect, useState } from 'react';
import { UserSchema } from '../../../utils/validations/UserValidation';
import SectionHome from '../../components/Section';
import logo from '../../../assets/images/logo.svg';
import arrowIcon from '../../../assets/icons/right-arrow 1.svg';
import arrowIconBlue from '../../../assets/icons/right-arrow-blue.svg';
import Card from '../../components/Card';
import Button from '../../components/Button';
import phoneImage from '../../../assets/images/app-bg 1.png';
import phoneImage2 from '../../../assets/images/app-bg 2.png';
import phoneImage3 from '../../../assets/images/pngkey 1.png';
import backgroundImage from '../../../assets/images/backgroundImageSection.png';
import happyImage from '../../../assets/images/backgroundmageHappy.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputMask } from '../../components/InputMask';
import { Redirect } from 'react-router-dom';
import api from '../../../services/api';

import { ValidationError } from 'yup';
import { Input, InputMessage } from './style';

interface Form{
	cpf: string;
	name: string;
	username: string;
	password: string;
	password2: string;
}


const Home: React.FC = () => {
	const intialState = {cpf:'', name:'', username:'', password:'', password2:''}

	const [username, setUsername] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [cpf, setCpf] = useState('');
	const [redirectLogin, setRedirectLogin] = useState(false);
	const [errors, setErrors] = useState<Form>(intialState);
	const [form, setForm] = useState<Form>(intialState);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();


		let res: Form = await validateFields(form);
		if(res){
			api.post('usuarios', {
				cpf: res.cpf,
				login: res.username,
				nome: res.name,
				senha: res.password,
			})
			.then((res) => {
				setRedirectLogin(true);
			})
			.catch((err) => {
				console.log(err);
				toast.error('500: Erro interno do servidor');
			});
		}else{
			toast.error("Preencha os campos inválidos para se cadastrar.")
		}		
	}

	useEffect(()=>{
		validateFields(form)
	},[form])

	function handleChange(value:string, campo:string, method:React.Dispatch<React.SetStateAction<string>>){
		method(value)
		setForm({...form, [campo]:value})
	}

	async function validateFields(form:Form){
		let errors:Form = intialState

		const res = await UserSchema.validate(form,{abortEarly:false})
		.then((res:Form) => {
			return res;
		}).catch((err:any) =>{
			err.inner.forEach((err:ValidationError) => {
				if(err.path){
					let path:string = err.path
					errors = {...errors, [path]:err.message}
				}		
			});
			
		})

		setErrors(errors)

		return res;		
	}


	if (redirectLogin) {
		return <Redirect to='/login' />;
	}
	console.log(form)
	return (
		<>
			<SectionHome background='image' backgroundImage={happyImage}>
				<ToastContainer />
				<header>
					<img src={logo} alt='Gama Academy' />
				</header>
				<div className='main'>
					<div className='callToAction'>
						<p>Gama Bank é um projeto dos nossos alunos.</p>
						<p>Ja tem conta?</p>
						<Button
							text='Acessar'
							LinkTo='/login'
							textColor='#8C52E5'
							textSize={17}
							icon={arrowIconBlue}
							widthSize={261}
							heightSize={42}
							textWeight={500}
							backgroundColor='#FFFFFF'
						/>
					</div>
					<div className='form'>
						<Card>
							<h2 className='homeFormTitle'>
								Peça sua conta do cartão de crédito Gama Bank
							</h2>
							<form onSubmit={handleSubmit}>
								<InputMask
									placeholder='Digite seu CPF'
									type='number'
									name='cpf'
									id='cpf'
									mask={['999.999.999-99']}
									value={cpf}
									onChangeM={setCpf}
									handleChange={handleChange}
									isInvalid={errors.cpf}
									
								/>
								<InputMessage>
									<Input
										placeholder='Escolha o nome do usuário'
										type='text'
										name='username'
										id='username'
										value={username}
										isInvalid={errors.username}
										onChange={(e) => {
											handleChange(e.target.value.trim(),"username",setUsername)
										}}
									/>
									{errors.username &&
										<p>{errors.username}</p>
									}
								</InputMessage>
								<InputMessage>
									<Input
										placeholder='Nome completo'
										type='text'
										name='name'
										id='name'
										isInvalid={errors.name}
										value={name}
										onChange={(e) => {
											handleChange(e.target.value,"name",setName)
										}}
									/>
									{errors.name &&
										<p>{errors.name}</p>
									}
								</InputMessage>
								<InputMessage>
									<Input
										placeholder='Digite sua senha'
										type='password'
										name='password'
										id='password'
										isInvalid={errors.password}
										value={password}
										onChange={(e) => {
											handleChange(e.target.value.trim(),"password",setPassword)
										}}
									/>
									{errors.password &&
										<p>{errors.password}</p>
									}
								</InputMessage>
								<InputMessage>
									<Input
										placeholder='Confirme sua senha'
										type='password'
										name='password2'
										id='password2'
										isInvalid={errors.password2}
										value={password2}
										onChange={(e) => {
											handleChange(e.target.value.trim(),"password2",setPassword2)
										}}
									/>
									{errors.password2 &&
										<p>{errors.password2}</p>
									}
								</InputMessage>
								<Button
									text='Acessar'
									textColor='#9B9B9B'
									textSize={17}
									textWeight={500}
									backgroundColor='#D8D8D8'
									backgroundColorHover='#8C52E5'
									textColorHover='#fff'
									icon={arrowIcon}
									widthSize={276.74}
									heightSize={47.66}
									type='submit'
								></Button>
							</form>
						</Card>
					</div>
				</div>
			</SectionHome>
			<SectionHome background='gray'>
				<div className='secondSection'>
					<div className='phoneSection'>
						<h1>Conta digital do Gama Academy</h1>
						<img src={phoneImage} alt='Apl' />
						<div className='paragraphwrapper'>
							<p>
								Rende mais que a poupança, sem taxa de manutenção nem tarifas
								escondidas.
							</p>
						</div>
					</div>
					<div className='phoneSection'>
						<h1>Cartão de Crédito</h1>
						<div className='imgwrapper'>
							<img src={phoneImage2} alt='' />
						</div>
						<div className='paragraphwrapper'>
							<p>
								Rende mais que a poupança, sem taxa de manutenção nem tarifas
								escondidas.
							</p>
						</div>
					</div>
				</div>
			</SectionHome>
			<SectionHome background='purple'>
				<div className='thirdSection'>
					<div className='divisor'>
						<div>
							<h1>Zero anuidade</h1>
							<p>
								Burocracia custa caro. Somos eficientes para você não ter que
								pagar tarifas.
							</p>
						</div>
					</div>
					<div className='divisor'>
						<h1>0,00</h1>
					</div>
				</div>
			</SectionHome>
			<SectionHome background='image' backgroundImage={backgroundImage}>
				<div className='forthSection'>
					<div>
						<h1>O fim da complexidade</h1>
						<p>
							Para quem sabe que tecnologia e design são melhores do que
							agências e papelada.
						</p>
					</div>
				</div>
			</SectionHome>
			<SectionHome background='gray'>
				<div className='lastSection'>
					<div className='content'>
						<div className='contentWrapper'>
							<h1>Simplifique a sua vida. Peça seu convite.</h1>
							<p>GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00</p>
							<p>Rua Fictícia, 999 - 00000-000 - São Paulo, SP </p>
							<p>
								Este é um projeto de avaliação | GamaAcademy | Accenture | 2021
							</p>
						</div>
					</div>
					<div className='imageWrapper'>
						<img
							src={phoneImage3}
							alt='Imagem de cuelular com aplicativo Gama Bank'
						/>
					</div>
				</div>
			</SectionHome>
		</>
	);
};

export default Home;
