import React from 'react';
import Card from '../../components/Card';
import SectionHome from '../../components/Section';
import hiddenImg from '../../../assets/images/hidden.svg';
import logo from '../../../assets/images/gamaDashboardLogo.svg';
import pixImg from '../../../assets/icons/Pix.svg';
import dollar from '../../../assets/icons/dollar.svg';
import cardCredit from '../../../assets/icons/credit-card.svg';
import { Sidebar, Container, Content } from './style';
import Lancamento from '../../components/Lançamento';

const Dashboard = () => {
	return (
		<SectionHome background='purple'>
			<Container>
				<Sidebar>
					<div className='logo'>
						<img src={logo} alt='Gama Academy' />
					</div>
					<nav>
						<ul>
							<li>
								<div role='button'>
									<img src={pixImg} alt='Icone Pix' aria-hidden='true' />
									<h1>Depositórios</h1>
								</div>
							</li>
							<li>
								<div role='button'>
									<img src={pixImg} alt='Icone Pix' aria-hidden='true' />
									<h1>Planos</h1>
								</div>
							</li>
							<li>
								<div role='button'>
									<img src={pixImg} alt='Icone Pix' aria-hidden='true' />
									<h1>Pagamentos</h1>
								</div>
							</li>
							<li>
								<div role='button'>
									<img src={pixImg} alt='Icone Pix' aria-hidden='true' />
									<h1>Transações</h1>
								</div>
							</li>
						</ul>
					</nav>
				</Sidebar>
				<Content>
					<div className='contentHead'>
						<h1>
							Olá <span>usuario</span>, seja bem vindo!
						</h1>{' '}
						<img src={hiddenImg} alt='Hidden' />
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							marginTop: '1.5%',
						}}
					>
						<div style={{ width: '47%', display: 'flex', height: '3%' }}>
							<Card>
								<div className='cardContentTitle'>
									<img src={dollar} alt='Dollar Icon' aria-hidden='true' />
									<h1>Conta</h1>
								</div>
								<div className='cardContentMain'>
									<h2>Saldo Disponivel</h2>
									<span>R$: 10.000,00</span>
								</div>
								<div className='cardContentTotal'>
									<h2>Transações</h2>
									<span>R$: 2.120,21</span>
								</div>
							</Card>
						</div>
						<div style={{ width: '47%', display: 'flex', height: '3%' }}>
							<Card>
								<div className='cardContentTitle'>
									<img src={cardCredit} alt='Dollar Icon' aria-hidden='true' />
									<h1>Conta Crédito</h1>
								</div>
								<div className='cardContentMain'>
									<h2>Saldo Disponivel</h2>
									<span>R$: 10.000,00</span>
								</div>
								<div className='cardContentTotal'>
									<h2>Transações</h2>
									<span>R$: 2.120,21</span>
								</div>
							</Card>
						</div>
					</div>
					<div
						style={{
							width: '100%',
							height: '48%',
							display: 'flex',
							marginTop: '3%',
						}}
					>
						<Card>
							<div className='cardContentTitle'>
								<img src={cardCredit} alt='Dollar Icon' aria-hidden='true' />
								<h1>Últimos lançamentos</h1>
							</div>
							<ul className='lançamentos'>
								<Lancamento
									tipoDeCompra='Compra no débito'
									nomeEmpresa='GamaAcademy'
									custo='298,55'
									data='Dia 24 de Jan.'
								/>
							</ul>
						</Card>
					</div>
				</Content>
			</Container>
		</SectionHome>
	);
};

export default Dashboard;
