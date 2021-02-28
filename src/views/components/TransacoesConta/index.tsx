import React from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import cardCredit from '../../../assets/icons/credit-card.svg';
import { LancamentoProps, IState } from '../../../types';
import Lancamento from '../../components/Lançamento';

const TransacoesConta = () => {
	const globalDadosUser = useSelector((state: IState) => state.dadosUser);

	return (
		<div className='lancamentosCard'>
			<div className='cardLancamentosWrapper'>
				<Card>
					<div className='cardContentTitle'>
						<img src={cardCredit} alt='Dollar Icon' aria-hidden='true' />
						<h1>Últimas transações</h1>
					</div>
					<div className='cardContentMain'>
						{globalDadosUser?.contaBanco?.lancamentos?.length > 0 && (
							<div>
								<h2>Últimos Lançamentos Conta Banco</h2>
								{globalDadosUser?.contaBanco?.lancamentos?.map(
									(lancamento: LancamentoProps) => (
										<Lancamento
											descricao={lancamento.descricao}
											contaDestino={lancamento.contaDestino}
											valor={lancamento.valor}
											data={lancamento.data}
										/>
									)
								)}
							</div>
						)}

						{globalDadosUser?.contaCredito?.lancamentos?.length > 0 && (
							<div>
								<h2>Últimos Lançamentos Conta Crédito</h2>
								{globalDadosUser?.contaCredito?.lancamentos?.map(
									(lancamento: LancamentoProps) => (
										<Lancamento
											descricao={lancamento.descricao}
											contaDestino={lancamento.contaDestino}
											valor={lancamento.valor}
											data={lancamento.data}
										/>
									)
								)}
							</div>
						)}

						{!(
							globalDadosUser?.contaBanco?.lancamentos?.length > 0 ||
							globalDadosUser?.contaCredito?.lancamentos?.length > 0
						) && <h1>Ainda não houve nenhum lançamento.</h1>}
					</div>
				</Card>
			</div>
		</div>
	);
};
export default TransacoesConta;
