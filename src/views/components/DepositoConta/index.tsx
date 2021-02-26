import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { Container } from './styles';
import { useDispatch, useStore } from 'react-redux';


const DepositoConta = () => {
    const dispatch = useDispatch()
    const store = useStore()
    return (
        
            <Container>
                <Card>
                    <h1>Meus Depósitos</h1>
                    <p>Depósito de: R$1000,00</p>
                    <p>Depósito de: R$1000,00</p>
                    <p>Depósito de: R$8000,00</p>
                </Card>
            </Container>
        
    )
}
export default DepositoConta;