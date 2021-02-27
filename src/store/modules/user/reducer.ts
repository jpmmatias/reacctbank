import { IToken, Form, User, LancamentoProps, DadosUser, IPlanoContaComponent, IPlanoConta, IDepositoConta, IPagamentoConta, IState } from '../../../types/index'
import { Reducer } from 'redux'
import { stat } from 'fs'

const INITIAL_STATE = {
  user: {},
  dadosUser: {},
  PlanosConta: [],
  PagamentosConta:{},
  SetScreen: () =>{},
}

const Users: Reducer<IState | any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const { user } = action.payload
        console.log(action.payload)
        return {
          ...state,
          user
        }
      case "ADD_DADOS_USER":
        const {dadosUser} = action.payload
        console.log(action.payload)
        return{
          ...state,
          dadosUser
        }
        case "ADD_IPLANO_CONTA":
        const {PlanoConta} = action.payload
        console.log(state)
        return{
          ...state,
          PlanosConta:[
            ...state.PlanosConta,
            PlanoConta
          ]
        }
        case "ADD_PLANOS_CONTA":
          const {PlanosConta} = action.payload
          console.log(state)
          return{
            ...state,
            PlanosConta:[
              ...state.PlanosConta,
              ...PlanosConta
            ]
          }
        case "ADD_DEPOSITO_CONTA":
        const {DepositoConta} = action.payload
        console.log(state)
        return{
          ...state,
          DepositosConta:[
            ...state.DepositosConta,
            DepositoConta
          ] 

        }

    case "ADD_PAGAMENTO_CONTA":
      const { PagamentoConta } = action.payload
      console.log(state)
      return {
        ...state,
        PagamentosConta: [
          ...state.PagamentosConta,
          PagamentoConta
        ]
      }

      case "UPDATE_SALDO_CONTA_BANCO":
      const { valor } = action.payload
      console.log(valor)
      console.log("CHAMOU")
      let saldo = state.dadosUser.contaBanco.saldo + valor
      return {
        ...state,
        dadosUser:{
          ...state.dadosUser,
          contaBanco:{
            ...state.dadosUser.contaBanco,
            saldo
          },
        },
      }

      case "UPDATE_SALDO_CONTA_CREDITO":
        const {valorCredito} = action.payload
        console.log("CHAMOU")
        let saldoCredito = state.dadosUser.contaCredito.saldo + valorCredito
        return{
          ...state,
          dadosUser:{
            ...state.dadosUser,
            contaCredito:{
              ...state.dadosUser.contaCredito,
              saldo:saldoCredito
            }
          }
        }


      case "SET_SCREEN":
        const {SetScreen} = action.payload
        console.log(SetScreen)
        return{
          ...state,
          SetScreen
        }

      default: {
          return state
        }
      }
  }

  export default Users