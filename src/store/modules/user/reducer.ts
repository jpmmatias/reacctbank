import { IToken, Form, User, LancamentoProps, DadosUser, IPlanoContaComponent, IPlanoConta, IDepositoConta} from '../../../types/index'
import { Reducer } from 'redux'

interface IState {
  user: User,
  dadosUser:DadosUser,
  PlanosConta: IPlanoConta[],
  DepositoConta: IDepositoConta[],
}

const INITIAL_STATE = {
  user: {},
  dadosUser:{},
  PlanosConta: [],
  DepositosConta:{}
}

 const Users: Reducer<IState | any> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
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



      default: {
        return state
      }
  }
}

export default Users