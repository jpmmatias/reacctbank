import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { Container } from './styles';
import { useDispatch, useStore } from 'react-redux';
import {IDepositoConta} from '../../../types';
import {DepositoContaInfo} from '../../../store/modules/user/actions';


const DepositoConta = () => {
    const dispatch = useDispatch()
    const store = useStore()
    const user = store.getState().user

    const[DepositoConta, setDepositoConta] = useState<IDepositoConta[]>([])


    return (
        
            <Container>
                <Card>
                    <h1>Depósitos</h1>

                    <form>
                        <div>
                            <label>Valor: </label>
                            <input type="number"/>
                            <label>Conta de destino: </label>
                            <input type="text"/>
                            <label>Data: </label>
                            <input type="text"/>
                            <label>Descrição: </label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>Tipo de depósito: </label>
                            <select>
                                <option value="Depósito1">Depósito em conta corrente</option>
                                <option value="Depósito2">Depósito em conta corrente</option> 
                                <option value="Depósito3">Depósito em conta corrente</option> 
                                <option value="Depósito4"></option>    
                                    
                            </select>
                        </div>
                        <button type="button">Adicionar</button>
                    </form>
                    
                </Card>
            </Container>
        
    )
}
export default DepositoConta;