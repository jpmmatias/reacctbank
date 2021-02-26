import React, { useEffect, useState } from 'react';
import '../Card';
import Card from '../Card';
import { useDispatch, useStore } from 'react-redux';


const TransacoesConta = () =>{
    const dispatch = useDispatch()
    const store = useStore()
    return(
        <>
        <h1>Minhas Transações</h1>
        </>
    )
}
export default TransacoesConta;