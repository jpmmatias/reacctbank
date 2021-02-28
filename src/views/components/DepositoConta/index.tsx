import React, { useState } from 'react';
import Card from '../Card';
import { Container } from './styles';
import { useDispatch, useStore } from 'react-redux';
import { DadosUser, IDepositoConta, User } from '../../../types';
import { DadosUserInfo } from '../../../store/modules/user/actions';
import api from '../../../services/api';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const DepositoConta = () => {
	const dispatch = useDispatch();
	const store = useStore();
	const dadosUser: DadosUser = store.getState().dadosUser;

	const [valor, setValor] = useState(0);
	const [data, setData] = useState('');
	const [planoConta, setPlanoConta] = useState(0);
	const [novoDeposito, setNovoDeposito] = useState<IDepositoConta>({
		conta: 0,
		data: '',
		descricao: 'Depósito',
		login: '',
		planoConta: 838,
		valor: 0,
	});

	function handleChange(method: any, value: any, campo: string) {
		method(value);
		setNovoDeposito({ ...novoDeposito, [campo]: value });
	}

	function deposito() {
		let user: User = store.getState().user;
		let deposito = {
			...novoDeposito,
			login: user.login,
			conta: dadosUser.contaBanco.id,
		};

		api
			.post('lancamentos', deposito, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('@tokenApp'),
				},
			})
			.then((res) => {
				let dadosUser: DadosUser = store.getState().dadosUser;
				switch (deposito.planoConta) {
					case 838:
						dadosUser.contaBanco.saldo += deposito.valor;
						dadosUser.contaBanco.lancamentos.push(deposito);
						dispatch(DadosUserInfo(dadosUser));
						break;
					case 840:
						dadosUser.contaBanco.saldo -= deposito.valor;
						dadosUser.contaCredito.saldo += deposito.valor;
						dadosUser.contaCredito.lancamentos.push(deposito);
						dadosUser.contaBanco.lancamentos.push({
							...deposito,
							valor: deposito.valor * -1,
						});
						dispatch(DadosUserInfo(dadosUser));
						break;
					default:
						break;
				}
				store.getState().SetScreen('home');
				toast.success('Deposito realizado com sucesso!');
			})
			.catch((err) => {
				toast.error(err.message);
			});
	}

	return (
		<>
			<ToastContainer />
			<Container>
				<Card>
					<h1>Depósitos</h1>

					<form>
						<div className='grid-container'>
							<div className='grid-item'>
								<label>Valor: </label>
								<input
									type='number'
									value={valor}
									onChange={(e) =>
										handleChange(setValor, parseFloat(e.target.value), 'valor')
									}
								/>
							</div>
							<div className='grid-item'>
								<label>Data: </label>
								<input
									type='date'
									value={data}
									onChange={(e) =>
										handleChange(setData, e.target.value, 'data')
									}
								/>
							</div>
							<div className='grid-item'>
								<label>Selecionar Conta: </label>
								<select
									onChange={(e) =>
										handleChange(
											setPlanoConta,
											parseInt(e.target.value),
											'planoConta'
										)
									}
								>
									<option value={838}>Conta Banco</option>
									<option value={840}>Conta Crédito</option>
								</select>
							</div>
						</div>
						<button type='button' onClick={deposito}>
							Realizar Depósito
						</button>
					</form>
				</Card>
			</Container>
		</>
	);
};
export default DepositoConta;
