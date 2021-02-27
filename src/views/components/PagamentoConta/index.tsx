import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { Container } from './styles';
import { useDispatch, useStore } from 'react-redux';
import { IPagamentoConta } from '../../../types';
import api from '../../../services/api';
import { UpdateSaldoContaBanco, UpdateSaldoContaCredito } from '../../../store/modules/user/actions';


const PagamentoConta = () => {
    const dispatch = useDispatch()
    const store = useStore()
    const user = store.getState().user
    const dadosUser = store.getState().dadosUser

    const [valor, setValor] = useState(0)
    const [contaDestino, setContaDestino] = useState('')
    const [data, setData] = useState('')
    const [descricao, setDescricao] = useState('')
    const [conta, setConta] = useState(0)
    const [tipoPagamento, setTipoPagamento] = useState('')

    const [novoPagamento, setNovoPagamento] = useState<IPagamentoConta>({
        conta: dadosUser.contaBanco.id, contaDestino: "", data: "", descricao: "",
        login: "", planoConta:841, valor: 0
    })

    function handleChange(method: any, value: any, campo: string) {
        method(value)
        setNovoPagamento({ ...novoPagamento, [campo]: value })
    }

    function pagamento(){
        let pagamento = {
            ...novoPagamento,
            login:user.login
        }

        console.log(pagamento)

        api.post("lancamentos",pagamento, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('@tokenApp'),
            },
        }).then((res) => {
            switch(pagamento.conta){
                case dadosUser.contaBanco.id:
                    dispatch(UpdateSaldoContaBanco(pagamento.valor * -1))
                    break;
                case dadosUser.contaCredito.id:
                    dispatch(UpdateSaldoContaCredito(pagamento.valor * -1))
                    break;
                default:
                    break;
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <Container>
            <Card>
                <h1>Pagamentos</h1>

                <form>
                    <div>
                        <div>
                            <label>Valor: </label>
                            <input type="number" value={valor} onChange={(e) => handleChange(setValor, parseInt(e.target.value), "valor")} />
                        </div>
                        <div>
                            <label>Conta de destino: </label>
                            <input type="text" value={contaDestino} onChange={(e) => handleChange(setContaDestino, e.target.value, "contaDestino")} />
                        </div>
                        <div>
                            <label>Data: </label>
                            <input type="date" value={data} onChange={(e) => handleChange(setData, e.target.value, "data")} />
                        </div>
                        <div>
                            <label>Tipo de pagamento: </label>
                            <select onChange={(e) => handleChange(setDescricao, e.target.value, "descricao")}>
                                <option value="PAGAMENTO_LUZ">Pagamento conta de luz</option>
                                <option value="PAGAMENTO_TELEFONE">Pagamento conta de telefone</option>
                                <option value="PAGAMENTO_MEDICO">Pagamento de convênio médico</option>
                                <option value="PAGAMENTO_CARTAO">Pagamento de fatura do cartão</option>
                                <option value="PAGAMENTO_PESSOA_FISICA">Pagamento para pessoa física</option>
                                <option value="PAGAMENTO_PESSOA_JURIDICA">Pagamento para pessoa jurídica</option>
                            </select>
                        </div>
                        <div>
                            <label>Selecionar Conta: </label>
                            <select onChange={(e) => handleChange(setConta,parseInt(e.target.value),"conta")}>
                                <option value={dadosUser.contaBanco?.id}>Conta Banco</option>
                                <option value={dadosUser.contaCredito?.id}>Conta Crédito</option>
                            </select>
                        </div>
                    </div>
                    <button type="button" onClick={pagamento}>Realizar Pagamento</button>
                    
                </form>

            </Card>
        </Container>

    )
}
export default PagamentoConta;