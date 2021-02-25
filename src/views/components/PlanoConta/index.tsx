import React, { useEffect, useState } from 'react';
import '../Card';
import Card from '../Card';
import { Container } from './styles';
import {IPlanoContaComponent, IPlanoConta} from '../../../types';
import api from '../../../services/api';
import headers from '../../../services/headers';

const PlanoConta:React.FC<IPlanoContaComponent> = ({login}:IPlanoContaComponent) => {
    const[planosConta, setPlanosConta] = useState<IPlanoConta[]>([])
    const[novoPlano, setNovoPlano] = useState("")

    useEffect(()=>{
        loadPlanosConta()
    },[])

    function loadPlanosConta(){
        api.get(`lancamentos/planos-conta?login=${login}`, headers)
        .then((res) =>{
            setPlanosConta(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return(
        <>
           <Container>
                <Card>
                    <h1>Planos de Conta</h1>
                    <form>
                        <label>Adicionar Novo:</label>
                        <input type="text" value={novoPlano} onChange={(e) => setNovoPlano(e.target.value.toLocaleUpperCase())}/>
                    </form>
                    <ul>
                        {planosConta.map((planoConta, id)=>(
                            <li key={id}>{planoConta.descricao}</li>
                        ))}
                        
                    </ul> 
                </Card>
            </Container>
            
        
        </>
    )
}

export default PlanoConta