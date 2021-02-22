export interface IToken {
	storage: string;
}

export interface Form {
	cpf: string;
	name: string;
	username: string;
	password: string;
	password2: string;
}

export interface User {
	idUsuario: number;
	sub: string;
}

export interface LancamentoProps {
	conta?: number;
	contaDestino: string;
	data: string;
	descricao: string;
	login?: string;
	planoConta?: number;
	valor: number;
}

export interface DadosUser {
	contaBanco: {
		saldo: number;
		id: number;
		lancamentos: any;
	};
	contaCredito: {
		saldo: number;
		id: number;
		lancamentos: any;
	};
}
