import React, { useEffect, useState } from 'react';
import '../Card';
import Card from '../Card';
import { Container } from './styles';
import {IPlanoConta} from '../../../types';
import api from '../../../services/api';
import headers from '../../../services/headers';
import { IPlanoContaInfo } from '../../../store/modules/user/actions';

import { useDispatch, useStore } from 'react-redux';

import { toast } from 'react-toastify';


const PlanoConta = () => {
    const dispatch = useDispatch()
    const store = useStore()
    const user = store.getState().user
    
    const[planosConta, setPlanosConta] = useState<IPlanoConta[]>([])
    const[novoPlano, setNovoPlano] = useState<IPlanoConta>({descricao:"", id:0, login: user.login, tipoMovimento:"", padrao:false})
    const[sigla, setSigla] = useState("")
    const[nome,setNome] = useState("")

    useEffect(()=>{
        
        const user = store.getState().user
        api.get(`lancamentos/planos-conta?login=${user.login}`, headers)
        .then((res) =>{
            
            dispatch(IPlanoContaInfo(res.data))
            setPlanosConta(res.data)
            console.log(res.data)
            
        }).catch((err) => {
            console.log(err)
        })
    },[])

    useEffect(()=>{
        setNovoPlano({...novoPlano, tipoMovimento:sigla, descricao:nome})
    },[sigla, nome])


    

    function savePlanosConta() {
         
        //let id = planosConta[planosConta.length-1].id+1;
        //let plano = {...novoPlano, id}
        const user = store.getState().user
        api.post(`lancamentos/planos-conta?login=${user.login}`, headers)
        .then(res => {
            
            dispatch(IPlanoContaInfo(res.data))
            setPlanosConta(res.data)
            console.log("Funcionou")
            
            setNome("")
            toast.success("Plano de Conta adicionado com sucesso!")
        }).catch(err =>{
            console.log("Falhou")
            toast.error("Não foi possível adicionar o novo plano de contas.")
        })
    }


    return(
        <>
           <Container>
                <Card>
                    <h1>Planos de Conta</h1>
                    <form>
                        <div>
                            <label>Nome:</label>
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value.toLocaleUpperCase())}/>
                        </div>
                        <div>
                            <label>Sigla:</label>
                            <select onChange={(e)=>setSigla(e.target.value)}>
                                {planosConta.map(planoConta => { 
                                    if(planoConta.padrao){
                                        return( 
                                        <option value={planoConta.tipoMovimento}>
                                            {planoConta.descricao} ({planoConta.tipoMovimento})
                                        </option>
                                        )
                                    }     
                                })}     
                            </select>
                        </div>
                        <button type="button" onClick={savePlanosConta}>Adicionar</button>
                    </form>
                    <ul>
                        {planosConta.map((planoConta, id)=>(
                            <li key={id}>
                                <p>{planoConta.descricao}</p>
                                <p>({planoConta.tipoMovimento})</p>
                            </li>
                        ))}
                        
                    </ul> 
                </Card>
            </Container>
            
        
        </>
    )
}

export default PlanoConta