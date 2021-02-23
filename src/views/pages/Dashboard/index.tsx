import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Section from '../../components/Section';
import hiddenImg from '../../../assets/images/hidden.svg';
import logo from '../../../assets/images/gamaDashboardLogo.svg';
import pixImg from '../../../assets/icons/Pix.svg';
import dollar from '../../../assets/icons/dollar.svg';
import cardCredit from '../../../assets/icons/credit-card.svg';
import { Sidebar, Container, Content } from './style';
import Lancamento from '../../components/Lançamento';
import { useHistory } from 'react-router-dom';
import jwt_decote from 'jwt-decode';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { DadosUser, User, LancamentoProps } from '../../../types';

const Dashboard = () => {
	const [dadosUser, setDadosUser] = useState<DadosUser>();

	const history = useHistory();

	const TokenStorage = null || localStorage.getItem('@tokenApp');

	const TokenDecodedValue = () => {
		if (TokenStorage) {
			const TokenArr = TokenStorage.split(' ');
			const TokenDecode = TokenArr[1];
			const decoded = jwt_decote<User>(TokenDecode);
			return decoded.sub;
		} else {
			alert('err');
		}
	};

	const tester = TokenDecodedValue();

	useEffect(() => {
		api
			.get(`dashboard?fim=2021-02-18&inicio=2021-02-18&login=${tester}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('@tokenApp'),
				},
			})
			.then((res) => {
				setDadosUser(res.data);
			})
			.catch((e) => {
				localStorage.clear();
				toast.error(
					'Sua sessão está inspirada., por favor faça o login novamente'
				);
				history.push('/login');
			});
	}, []);

	return (
		<Section background='purple'>
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
									<span>R$: {dadosUser?.contaBanco.saldo}</span>
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
								{dadosUser?.contaBanco.lancamentos.lenght > 0 ? (
									dadosUser?.contaBanco.lancamentos.forEach(
										(lancamento: LancamentoProps) => {
											return (
												<Lancamento
													descricao={lancamento.descricao}
													contaDestino={lancamento.contaDestino}
													valor={lancamento.valor}
													data={lancamento.data}
												/>
											);
										}
									)
								) : (
									<h1>Ainda não fez nenhum lançamento</h1>
								)}
							</ul>
						</Card>
					</div>
				</Content>
			</Container>
		</Section>
	);
};

export default Dashboard;
