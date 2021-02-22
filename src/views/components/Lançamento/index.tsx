import React from 'react';
import cardCredit2 from '../../../assets/icons/credit-card2.svg';
import { Container, Content, Data } from './style';

interface LancamentoProps {
	tipoDeCompra: string;
	nomeEmpresa: string;
	custo: number;
	data: string;
}

const Lancamento = ({
	tipoDeCompra,
	nomeEmpresa,
	custo,
	data,
}: LancamentoProps) => {
	return (
		<Container>
			<Content>
				<div>
					<img src={cardCredit2} alt='Icone Credit Card' aria-hidden='true' />
				</div>
				<div>
					<h1>{tipoDeCompra}</h1>
					<h2>{nomeEmpresa}</h2>
					<span>R$: {custo}</span>
				</div>
			</Content>
			<Data>{data}</Data>
		</Container>
	);
};

export default Lancamento;
