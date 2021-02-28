import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Section from '../../components/Section';
import hiddenImg from '../../../assets/images/hidden.svg';
import logo from '../../../assets/images/logoGama.png';
import pixImg from '../../../assets/icons/Pix.svg';
import depositosIcon from '../../../assets/icons/depositarIcon.svg';
import pagamentosIcon from '../../../assets/icons/lancamentosIcon.svg';
import transferenciaIcon from '../../../assets/icons/transferenciaIcon.svg';
import dollar from '../../../assets/icons/dollar.svg';
import cardCredit from '../../../assets/icons/credit-card.svg';
import { Sidebar, Container, Content } from './style';
import Lancamento from '../../components/Lançamento';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';
import PlanoConta from '../../components/PlanoConta';
import DepositoConta from '../../components/DepositoConta';
import TransacoesConta from '../../components/TransacoesConta';
import PagamentoConta from '../../components/PagamentoConta';
import { DadosUser, LancamentoProps, IState } from '../../../types';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	AddPlanosConta,
	DadosUserInfo,
	SetScreen,
} from '../../../store/modules/user/actions';
import logout from '../../../assets/icons/logout.svg';

const Dashboard = () => {
	const store = useStore();
	const dispatch = useDispatch();
	const globalDadosUser = useSelector((state: IState) => state.dadosUser);

	const [dadosUser, setDadosUser] = useState<DadosUser>();
	const [screen, setScreen] = useState('home');
	const [hidden, setHidden] = useState(false);

	const history = useHistory();

	//carrega informações da dashboard no redux
	useEffect(() => {
		const user = store.getState().user;
		api
			.get(`dashboard?fim=2021-02-18&inicio=2021-02-18&login=${user.login}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('@tokenApp'),
				},
			})
			.then((res) => {
				setDadosUser(res.data);
				dispatch(DadosUserInfo(res.data));
			})
			.catch((e) => {
				localStorage.clear();
				toast.error(
					'Sua sessão está expirada. Por favor, faça o login novamente'
				);
				history.push('/login');
			});
	}, []);

	//carrega os planos de conta no redux
	useEffect(() => {
		const user = store.getState().user;
		api
			.get(`lancamentos/planos-conta?login=${user.login}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('@tokenApp'),
				},
			})
			.then((res) => {
				dispatch(AddPlanosConta(res.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		dispatch(SetScreen(setScreen));
	}, []);

	return (
		<>
			<ToastContainer />
			<Section background='purple'>
				<Container>
					<Sidebar>
						<div
							role='button'
							className='logo'
							onClick={() => setScreen('home')}
						>
							<img src={logo} alt='Gama Academy' />
						</div>
						<nav>
							<ul>
								<li>
									<div role='button' onClick={() => setScreen('depositos')}>
										<img
											src={depositosIcon}
											alt='Icone Pix'
											aria-hidden='true'
										/>
										<h1>Depósitos</h1>
									</div>
								</li>
								<li>
									<div role='button' onClick={() => setScreen('planos')}>
										<img src={pixImg} alt='Icone Pix' aria-hidden='true' />
										<h1>Planos</h1>
									</div>
								</li>
								<li>
									<div role='button' onClick={() => setScreen('pagamentos')}>
										<img
											src={pagamentosIcon}
											alt='Icone Pix'
											aria-hidden='true'
										/>
										<h1>Pagamentos</h1>
									</div>
								</li>
								<li>
									<div role='button' onClick={() => setScreen('transacoes')}>
										<img
											src={transferenciaIcon}
											alt='Icone Pix'
											aria-hidden='true'
										/>
										<h1>Transações</h1>
									</div>
								</li>
							</ul>
						</nav>
					</Sidebar>
					{screen === 'home' && (
						<Content>
							<div className='contentHead'>
								<h1>
									Olá <span>{store.getState().user.nome}</span>, seja bem vindo!
								</h1>
								{}
								<div
									style={{ filter: hidden ? 'grayscale(1)' : 'grayscale(0)' }}
									role='button'
									onClick={() => {
										setHidden(!hidden);
									}}
								>
									<img src={hiddenImg} alt='Hidden' />
								</div>

								<div
									role='button'
									onClick={() => {
										document.location.reload(true);
									}}
									className='logoutButton'
								>
									<img src={logout} alt='Botão de Logout' />
								</div>
							</div>
							<div className='contas'>
								<div className='cardConta'>
									<Card>
										<div className='cardContentTitle'>
											<img src={dollar} alt='Dollar Icon' aria-hidden='true' />
											<h1>Conta</h1>
										</div>
										<div className='cardContentMain'>
											<h2>Saldo Disponivel</h2>
											<span>
												R$: {!hidden && globalDadosUser?.contaBanco?.saldo}
											</span>
										</div>
										<div className='cardContentTotal'>
											<h2>Transações</h2>
											<span>
												R$:
												{!hidden &&
													globalDadosUser?.contaBanco?.lancamentos?.reduce(
														(acc: number, currentValue: LancamentoProps) => {
															return acc + currentValue.valor;
														},
														0
													)}
											</span>
										</div>
									</Card>
								</div>
								<div className='cardConta'>
									<Card>
										<div className='cardContentTitle'>
											<img
												src={cardCredit}
												alt='Dollar Icon'
												aria-hidden='true'
											/>
											<h1>Conta Crédito</h1>
										</div>
										<div className='cardContentMain'>
											<h2>Fatura Atual</h2>
											<span>
												R$: {!hidden && globalDadosUser?.contaCredito?.saldo}
											</span>
										</div>
										<div className='cardContentTotal'>
											<h2>Transações</h2>
											<span>
												R$:{' '}
												{!hidden &&
													globalDadosUser?.contaCredito?.lancamentos?.reduce(
														(acc: number, currentValue: LancamentoProps) => {
															return acc + currentValue.valor;
														},
														0
													)}
											</span>
										</div>
									</Card>
								</div>
							</div>
							<div className='lancamentosCard'>
								<Card>
									<div className='cardContentTitle'>
										<img
											src={cardCredit}
											alt='Dollar Icon'
											aria-hidden='true'
										/>
										<h1>Últimos lançamentos</h1>
									</div>
									<div className='cardContentMain'>
										{globalDadosUser?.contaBanco?.lancamentos?.length > 0 && (
											<div>
												<h2>Último Lançamento Conta Banco</h2>
												<Lancamento
													descricao={
														globalDadosUser.contaBanco.lancamentos[
															globalDadosUser.contaBanco.lancamentos.length - 1
														].descricao
													}
													hidden={hidden}
													contaDestino={
														globalDadosUser.contaBanco.lancamentos[
															globalDadosUser.contaBanco.lancamentos.length - 1
														].contaDestino
													}
													valor={
														globalDadosUser.contaBanco.lancamentos[
															globalDadosUser.contaBanco.lancamentos.length - 1
														].valor
													}
													data={
														globalDadosUser.contaBanco.lancamentos[
															globalDadosUser.contaBanco.lancamentos.length - 1
														].data
													}
												/>
											</div>
										)}

										{globalDadosUser?.contaCredito?.lancamentos?.length > 0 && (
											<div>
												<h2>Último Lançamento Conta Crédito</h2>
												<Lancamento
													hidden={hidden}
													descricao={
														globalDadosUser.contaCredito.lancamentos[
															globalDadosUser.contaCredito.lancamentos.length -
																1
														].descricao
													}
													contaDestino={
														globalDadosUser.contaCredito.lancamentos[
															globalDadosUser.contaCredito.lancamentos.length -
																1
														].contaDestino
													}
													valor={
														globalDadosUser.contaCredito.lancamentos[
															globalDadosUser.contaCredito.lancamentos.length -
																1
														].valor
													}
													data={
														globalDadosUser.contaCredito.lancamentos[
															globalDadosUser.contaCredito.lancamentos.length -
																1
														].data
													}
												/>
											</div>
										)}
										{!(
											globalDadosUser?.contaBanco?.lancamentos?.length > 0 ||
											globalDadosUser?.contaCredito?.lancamentos?.length > 0
										) && <h1>Ainda não houve nenhum lançamento.</h1>}
									</div>
								</Card>
							</div>
						</Content>
					)}
					{screen === 'planos' && (
						<Content center>
							<PlanoConta />
						</Content>
					)}
					{screen === 'depositos' && (
						<Content center>
							<DepositoConta />
						</Content>
					)}
					{screen === 'transacoes' && (
						<Content center>
							<TransacoesConta />
						</Content>
					)}
					{screen === 'pagamentos' && (
						<Content center>
							<PagamentoConta />
						</Content>
					)}
				</Container>
			</Section>
		</>
	);
};

export default Dashboard;
