import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { Container } from './styles';
import { useDispatch, useStore } from 'react-redux';


const TransacoesConta = () => {
    const dispatch = useDispatch()
    const store = useStore()
    return (
        <Container>
            <Card>
                <h1>Minhas Transações</h1>
                <p>Movimentação no valor de: R$ 5000,00</p>
                <p>Movimentação no valor de: R$ 5000,00</p>
                <p>Movimentação no valor de: R$ 5000,00</p>
                <p>Movimentação no valor de: R$ 5000,00</p>
            </Card>
        </Container>
    )
}
export default TransacoesConta;