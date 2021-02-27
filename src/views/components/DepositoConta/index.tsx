import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { Container } from './styles';
import { useDispatch, useStore } from 'react-redux';
import { DadosUser, IDepositoConta, IPlanoConta, User } from '../../../types';
import { DepositoContaInfo } from '../../../store/modules/user/actions';
import api from '../../../services/api';
import Headers from '../../../services/headers';


const DepositoConta = () => {
    const dispatch = useDispatch()
    const store = useStore()
    const planosConta:IPlanoConta[] = store.getState().PlanosConta
    const dadosUser:DadosUser = store.getState().dadosUser

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
        let deposito = {...novoDeposito, login:user.login, conta:dadosUser.contaBanco.id}
        console.log(deposito)
        api.post('lancamentos', deposito, Headers)
        .then((res)=>{
            console.log("sucesso")
        }).catch(err => {
            console.log(err)
        })
    }

    return (

        <Container>
            <Card>
                <h1>Depósitos</h1>

                <form>
                <div className="grid-container">
                    <div className="grid-item">
                        <label>Valor: </label>
                        <input type="number" value={valor} onChange={(e) => handleChange(setValor, parseFloat(e.target.value), "valor")} />
                    </div>
                    <div className="grid-item">
                        <label>Conta de destino: </label>
                        <input type="text" value={contaDestino} onChange={(e) => handleChange(setContaDestino, e.target.value, "contaDestino")} />
                    </div>
                    <div className="grid-item">
                        <label>Data: </label>
                        <input type="date" value={data} onChange={(e) =>handleChange( setData, e.target.value, "data")} />
                    </div>
                    <div className="grid-item">
                        <label>Tipos de Depósito: </label>
                        <select onChange={(e) => handleChange(setDescricao, e.target.value, "descricao")}>
                            <option value="DEPOSITO_CC">Depósito em Conta Corrente</option>
                            <option value="DEPOSITO_P">Depósito em Conta Poupança</option>
                        </select>
                    </div>
                    <div className="grid-item">
                        <label>Planos de Contas: </label>
                        <select onChange={(e) => handleChange(setPlanoConta, e.target.value, "planoConta")}>
                            {planosConta.map((planoConta:IPlanoConta)=>(
                                <option value={planoConta.id}>{planoConta.descricao}</option>
                            ))}                
                        </select>
                    </div>           
                </div>
                    <button type="button" onClick={deposito}>Realizar Depósito</button>
                </form>

            </Card>
        </Container>

    )
}
export default DepositoConta;