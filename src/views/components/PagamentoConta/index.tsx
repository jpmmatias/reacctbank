import React, { useEffect, useState } from 'react';
import Card from '../Card';
import {Container} from './styles';
import { useDispatch, useStore } from 'react-redux';


const PagamentoConta = () => {
    const dispatch = useDispatch()
    const store = useStore()
    return (
        <Container>
            <Card>
                <h1>Meus Pagamentos</h1>
                <p>Pagamento no valor de: R$ 5000,00</p>
                <p>Pagamento no valor de: R$ 5000,00</p>
                <p>Pagamento no valor de: R$ 5000,00</p>
                <p>Pagamento no valor de: R$ 5000,00</p>
            </Card>
        </Container>
    )
}
export default PagamentoConta;