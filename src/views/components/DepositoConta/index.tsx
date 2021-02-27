import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { Container } from './styles';
import { useDispatch, useStore } from 'react-redux';
import { IDepositoConta, IPlanoConta, User } from '../../../types';
import { DepositoContaInfo } from '../../../store/modules/user/actions';

const DepositoConta = () => {
	const dispatch = useDispatch();
	const store = useStore();
	const planosConta: IPlanoConta[] = store.getState().PlanosConta;
	const [tipoDeposito, setTipoDeposito] = useState('');
	//const[DepositoConta, setDepositoConta] = useState<IDepositoConta[]>([])
	const [valor, setValor] = useState(0);
	const [contaDestino, setContaDestino] = useState('');
	const [data, setData] = useState('');
	const [descricao, setDescricao] = useState('');
	const [planoConta, setPlanoConta] = useState(0);
	const [novoDeposito, setNovoDeposito] = useState<IDepositoConta>({
		conta: 0,
		contaDestino: '',
		data: '',
		descricao: '',
		login: '',
		planoConta: 0,
		valor: 0,
	});

	function handleChange(method: any, value: any, campo: string) {
		method(value);
		setNovoDeposito({ ...novoDeposito, [campo]: value });
	}

	function deposito() {
		let user: User = store.getState().user;
		setNovoDeposito({ ...novoDeposito, login: user.login });
	}

	console.log(planosConta);

	return (
		<Container>
			<Card>
				<h1>Depósitos</h1>

				<form>
					<div>
						<label>Valor: </label>
						<input
							type='number'
							value={valor}
							onChange={(e) =>
								handleChange(setValor, parseInt(e.target.value), 'valor')
							}
						/>
						<label>Conta de destino: </label>
						<input
							type='text'
							value={contaDestino}
							onChange={(e) =>
								handleChange(setContaDestino, e.target.value, 'contaDestino')
							}
						/>
						<label>Data: </label>
						<input
							type='date'
							value={data}
							onChange={(e) => handleChange(setData, e.target.value, 'data')}
						/>
						<label>Descrição: </label>
						<input
							type='text'
							value={descricao}
							onChange={(e) =>
								handleChange(setDescricao, e.target.value, 'descricao')
							}
						/>
					</div>
					<div>
						<label>Tipo de depósito: </label>
						<select onChange={(e) => setTipoDeposito(e.target.value)}>
							<option value='Depósito1'>Depósito em conta corrente</option>
							<option value='Depósito2'>Depósito em conta corrente</option>
							<option value='Depósito3'>Depósito em conta corrente</option>
							<option value='Depósito4'></option>
						</select>
						<button type='button'>Adicionar</button>
					</div>
				</form>
			</Card>
		</Container>
	);
};
export default DepositoConta;
