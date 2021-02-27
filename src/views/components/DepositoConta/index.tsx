import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { Container } from './styles';
import { useDispatch, useStore } from 'react-redux';
import { IDepositoConta, IPlanoConta, User } from '../../../types';
import { DepositoContaInfo } from '../../../store/modules/user/actions';


const DepositoConta = () => {
    const dispatch = useDispatch()
    const store = useStore()
    const planosConta:IPlanoConta[] = store.getState().PlanosConta

    //const[DepositoConta, setDepositoConta] = useState<IDepositoConta[]>([])
    const [valor, setValor] = useState(0)
    const [contaDestino, setContaDestino] = useState('')
    const [data, setData] = useState('')
    const [descricao, setDescricao] = useState('')
    const [planoConta, setPlanoConta] = useState(0)
    const [novoDeposito, setNovoDeposito] = useState<IDepositoConta>({
        conta: 0, contaDestino: "", data: "", descricao: "",
        login: "", planoConta: 0, valor: 0
    })

    function handleChange(method: any, value: any, campo: string) {
        method(value)
        setNovoDeposito({ ...novoDeposito, [campo]: value })
    }

    function deposito(){
        let user:User = store.getState().user
        setNovoDeposito({...novoDeposito, login: user.login })
    }

    console.log(planosConta)

    return (

        <Container>
            <Card>
                <h1>Depósitos</h1>

                <form>
                    <div>
                        <label>Valor: </label>
                        <input type="number" value={valor} onChange={(e) => handleChange(setValor, parseFloat(e.target.value), "valor")} />
                        <label>Conta de destino: </label>
                        <input type="text" value={contaDestino} onChange={(e) => handleChange(setContaDestino, e.target.value, "contaDestino")} />
                        <label>Data: </label>
                        <input type="date" value={data} onChange={(e) =>handleChange( setData, e.target.value, "data")} />
                    </div>
                    <div>
                        <label>Tipos de Depósito: </label>
                        <select onChange={(e) => handleChange(setDescricao, e.target.value, "descricao")}>
                            <option value="DEPOSITO_CC">Depósito em Conta Corrente</option>
                            <option value="DEPOSITO_P">Depósito em Conta Poupança</option>
                        </select>
                    </div>
                    <div>
                        <label>Tipos de Plano de Contas: </label>
                        <select onChange={(e) => handleChange(setDescricao, e.target.value, "descricao")}>
                            <option value="DEPOSITO_CC">Depósito em Conta Corrente</option>
                            <option value="DEPOSITO_P">Depósito em Conta Poupança</option>
                        </select>
                    </div>
                    <button type="button">Realizar Depósito</button>
                </form>

            </Card>
        </Container>

    )
}
export default DepositoConta;