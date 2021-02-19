import React from 'react';
import logo from '../../../assets/images/logo.svg';
import SectionHome from '../../components/Section';
import Card from '../../components/Card';
import Button from '../../components/Button';
import arrowIcon from '../../../assets/icons/right-arrow 1.svg';


const Login = () => {
	return (
		<>
			<SectionHome background="purple">
				<header>
					<img src={logo} alt='Gama Academy' />
				</header>
				<div className="main">
					<div className="form">
						<Card>
							<form>
								<h2 className='homeFormTitle'>
									Faça seu Login
								</h2>
								<input type="text" placeholder="Digite seu usuario" name="username" id="username" />
								<input type="password" placeholder="Digite sua senha" name="password" id="password" />
								<Button
									text='Continuar'
									textColor='white'
									textSize={17}
									textWeight={500}
									backgroundColor='#68DE5A'
									icon={arrowIcon}
									widthSize={276.74}
									heightSize={47.66}
								></Button>
								<p className="link"><a className="link" href="/recoveryPass">Esqueci minha senha </a></p>
								<p className="link2"><a className="link" href="/">Ainda não sou cliente </a></p>
							</form>
						</Card>
					</div>
				</div>
			</SectionHome>
		</>
	)

};

export default Login;
