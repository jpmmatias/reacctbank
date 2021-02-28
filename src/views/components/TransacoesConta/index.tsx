import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { Container } from './styles';
import { useDispatch, useStore, useSelector } from 'react-redux';
import cardCredit from '../../../assets/icons/credit-card.svg';
import { DadosUser, LancamentoProps, IState } from '../../../types';
import Lancamento from '../../components/Lançamento';


const TransacoesConta = () => {
    const dispatch = useDispatch()
    const store = useStore()
    const globalDadosUser = useSelector((state: IState) => state.dadosUser)
    const [dadosUser, setDadosUser] = useState<DadosUser>();


    return (

        <div className='lancamentosCard'>
            <Card>
                <div className='cardContentTitle'>
                    <img src={cardCredit} alt='Dollar Icon' aria-hidden='true' />
                    <h1>Últimas transações</h1>
                </div>
                <div className='cardContentMain'>
                    {globalDadosUser?.contaBanco?.lancamentos?.length > 0 &&
                        <div>
                            <h2>Último Lançamento Conta Banco</h2>
                            <Lancamento
                                descricao={globalDadosUser.contaBanco.lancamentos[globalDadosUser.contaBanco.lancamentos.length - 1].descricao}
                                contaDestino={globalDadosUser.contaBanco.lancamentos[globalDadosUser.contaBanco.lancamentos.length - 1].contaDestino}
                                valor={globalDadosUser.contaBanco.lancamentos[globalDadosUser.contaBanco.lancamentos.length - 1].valor}
                                data={globalDadosUser.contaBanco.lancamentos[globalDadosUser.contaBanco.lancamentos.length - 1].data}
                            />
                        </div>
                    }

                    {globalDadosUser?.contaCredito?.lancamentos?.length > 0 &&
                        <div>
                            <h2>Último Lançamento Conta Crédito</h2>
                            <Lancamento
                                descricao={globalDadosUser.contaCredito.lancamentos[globalDadosUser.contaCredito.lancamentos.length - 1].descricao}
                                contaDestino={globalDadosUser.contaCredito.lancamentos[globalDadosUser.contaCredito.lancamentos.length - 1].contaDestino}
                                valor={globalDadosUser.contaCredito.lancamentos[globalDadosUser.contaCredito.lancamentos.length - 1].valor}
                                data={globalDadosUser.contaCredito.lancamentos[globalDadosUser.contaCredito.lancamentos.length - 1].data}
                            />
                        </div>
                    }

                    {!(globalDadosUser?.contaBanco?.lancamentos?.length > 0 || globalDadosUser?.contaCredito?.lancamentos?.length > 0) &&
                        <h1>Ainda não houve nenhum lançamento.</h1>
                    }




                </div>
            </Card>
        </div>

    )
}
export default TransacoesConta;