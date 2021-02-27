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
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import PlanoConta from '../../components/PlanoConta';
import DepositoConta from '../../components/DepositoConta';
import TransacoesConta from '../../components/TransacoesConta';
import PagamentoConta from '../../components/PagamentoConta';
import { DadosUser, LancamentoProps } from '../../../types';
import { useDispatch, useStore } from 'react-redux';
import { DadosUserInfo } from '../../../store/modules/user/actions';

const Dashboard = () => {
	const store = useStore();
	const dispatch = useDispatch();

	const [dadosUser, setDadosUser] = useState<DadosUser>();
	const [screen, setScreen] = useState('home');

	const history = useHistory();

	const TokenStorage = null || localStorage.getItem('@tokenApp');

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

	return (
		<Section background='purple'>
			<Container>
				<Sidebar>
					<div className='logo'>
						<Link className='link' to='/dashboard'>
							<img src={logo} alt='Gama Academy' />
						</Link>
					</div>
					<nav>
						<ul>
							<li>
								<div role='button' onClick={() => setScreen('depositos')}>
									<img src={depositosIcon} alt='Icone Pix' aria-hidden='true' />
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
							<img src={hiddenImg} alt='Hidden' />
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
										<span>R$: {dadosUser?.contaBanco.saldo}</span>
									</div>
									<div className='cardContentTotal'>
										<h2>Transações</h2>
										<span>
											R$:{' '}
											{dadosUser?.contaBanco.lancamentos.reduce(
												(
													acc: LancamentoProps,
													currentValue: LancamentoProps
												) => {
													return acc.valor + currentValue.valor;
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
										<span>R$: {dadosUser?.contaCredito.saldo}</span>
									</div>
									<div className='cardContentTotal'>
										<h2>Limite Disponível</h2>
										<span>
											R$:{' '}
											{dadosUser?.contaCredito.lancamentos.reduce(
												(
													acc: LancamentoProps,
													currentValue: LancamentoProps
												) => {
													return acc.valor + currentValue.valor;
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
										<h1 className='aindantemlancamentos'>
											Ainda não fez nenhum lançamento
										</h1>
									)}
								</ul>
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
	);
};

export default Dashboard;
