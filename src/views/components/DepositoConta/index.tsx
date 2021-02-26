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
                    <h1>Depósitos</h1>
                    
                </Card>
            </Container>
        
    )
}
export default DepositoConta;