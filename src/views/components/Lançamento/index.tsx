import React from 'react';
import cardCredit2 from '../../../assets/icons/credit-card2.svg';
import { Container, Content, Data } from './style';

import { LancamentoProps } from '../../../types';

const Lancamento = ({
	descricao,
	contaDestino,
	valor,
	data,
	hidden,
}: LancamentoProps) => {
	return (
		<Container>
			<Content>
				<div>
					<img src={cardCredit2} alt='Icone Credit Card' aria-hidden='true' />
				</div>
				<div>
					<h1>{descricao}</h1>
					<h2>{contaDestino}</h2>
					<span>R$: {!hidden && valor}</span>
				</div>
			</Content>
			<Data>{data}</Data>
		</Container>
	);
};

export default Lancamento;
