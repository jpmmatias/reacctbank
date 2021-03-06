import React, { useEffect, useState } from 'react';
import '../Card';
import Card from '../Card';
import { Container } from './styles';
import { IPlanoConta } from '../../../types';
import api from '../../../services/api';
import { PlanoContaInfo } from '../../../store/modules/user/actions';

import { useDispatch, useStore } from 'react-redux';

import { toast } from 'react-toastify';

const PlanoConta = () => {
	const dispatch = useDispatch();
	const store = useStore();
	const user = store.getState().user;

	const [planosConta, setPlanosConta] = useState<IPlanoConta[]>(
		store.getState().PlanosConta
	);
	const [novoPlano, setNovoPlano] = useState<IPlanoConta>({
		descricao: '',
		id: 0,
		login: user.login,
		tipoMovimento: '',
		padrao: false,
	});
	const [sigla, setSigla] = useState('');
	const [nome, setNome] = useState('');

	useEffect(() => {
		setNovoPlano({ ...novoPlano, tipoMovimento: sigla, descricao: nome });
	}, [sigla, nome]);

	console.log(store.getState());

	function savePlanosConta() {
		let id = planosConta[planosConta.length - 1].id + 1;
		let plano = { ...novoPlano, id };
		console.log(plano);
		const user = store.getState().user;
		api
			.post(`lancamentos/planos-conta?login=${user.login}`, plano, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('@tokenApp'),
				},
			})
			.then((res) => {
				dispatch(PlanoContaInfo(plano));
				setPlanosConta([...planosConta, plano]);
				setNome('');
				toast.success('Plano de Conta adicionado com sucesso!');
			})
			.catch((err) => {
				toast.error('Não foi possível adicionar o novo plano de contas.');
			});
	}

	return (
		<>
			<Container>
				<Card>
					<h1>Planos de Conta</h1>
					<form>
						<div>
							<label>Nome:</label>
							<input
								type='text'
								value={nome}
								onChange={(e) => setNome(e.target.value.toLocaleUpperCase())}
							/>
						</div>
						<div>
							<label>Sigla:</label>
							<select onChange={(e) => setSigla(e.target.value)}>
								{planosConta.map((planoConta) => {
									if (planoConta.padrao) {
										return (
											<option value={planoConta.tipoMovimento}>
												{planoConta.descricao} ({planoConta.tipoMovimento})
											</option>
										);
									}
									return null;
								})}
							</select>
						</div>
						<button type='button' onClick={savePlanosConta}>
							Adicionar
						</button>
					</form>
					<ul>
						{planosConta.map((planoConta, id) => (
							<li key={id}>
								<p>{planoConta.descricao}</p>
								<p>({planoConta.tipoMovimento})</p>
							</li>
						))}
					</ul>
				</Card>
			</Container>
		</>
	);
};

export default PlanoConta;
