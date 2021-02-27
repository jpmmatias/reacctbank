import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { Container } from './styles';
import { useDispatch, useStore } from 'react-redux';
import { IPagamentoConta } from '../../../types';


const PagamentoConta = () => {
    const dispatch = useDispatch()
    const store = useStore()
    const user = store.getState().user

    const [valor, setValor] = useState(0)
    const [contaDestino, setContaDestino] = useState('')
    const [data, setData] = useState('')
    const [descricao, setDescricao] = useState('')
    const [tipoPagamento, setTipoPagamento] = useState('')

    const [novoPagamento, setNovoPagamento] = useState<IPagamentoConta>({
        conta: 0, contaDestino: "", data: "", descricao: "",
        login: "", planoConta: 0, valor: 0
    })

    function handleChange(method: any, value: any, campo: string) {
        method(value)
        setNovoPagamento({ ...novoPagamento, [campo]: value })
    }

    return (


        <Container>
            <Card>
                <h1>Pagamentos</h1>

                <form>
                    <div>
                        <label>Valor: </label>
                        <input type="number" value={valor} onChange={(e) => handleChange(setValor, parseInt(e.target.value), "valor")} />
                        <label>Conta de destino: </label>
                        <input type="text" value={contaDestino} onChange={(e) => handleChange(setContaDestino, e.target.value, "contaDestino")} />
                        <label>Data: </label>
                        <input type="date" value={data} onChange={(e) => handleChange(setData, e.target.value, "data")} />
                        <label>Descrição: </label>
                        <input type="text" value={descricao} onChange={(e) => handleChange(setDescricao, e.target.value, "descricao")} />
                    </div>
                    <div>
                        <label>Tipo de pagamento: </label>
                        <select>

                            <option value="Pagamento1">Pagamento conta de luz</option>
                            <option value="Pagamento2">Pagamento conta de telefone</option>
                            <option value="Pagamento3">Pagamento de convênio médico</option>
                            <option value="Pagamento4">Pagamento de fatura do cartão</option>

                        </select>
                    </div>
                    <button type="button">Adicionar</button>
                </form>

            </Card>
        </Container>

    )
}
export default PagamentoConta;