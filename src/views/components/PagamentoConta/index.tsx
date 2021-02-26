import React, { useEffect, useState } from 'react';
import '../Card';
import Card from '../Card';
import { useDispatch, useStore } from 'react-redux';


const PagamentoConta = () =>{
    const dispatch = useDispatch()
    const store = useStore()
    return(
        <>
        <h1>Meus Pagamentos</h1>
        </>
    )
}
export default PagamentoConta;