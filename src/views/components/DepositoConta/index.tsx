import React, { useEffect, useState } from 'react';
import '../Card';
import Card from '../Card';
import { useDispatch, useStore } from 'react-redux';


const DepositoConta = () =>{
    const dispatch = useDispatch()
    const store = useStore()
    return(
        <>
        <h1>Meus Depósitos</h1>
        </>
    )
}
export default DepositoConta;