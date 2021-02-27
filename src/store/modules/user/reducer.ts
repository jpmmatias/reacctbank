import { IToken, Form, User, LancamentoProps, DadosUser, IPlanoContaComponent, IPlanoConta, IDepositoConta} from '../../../types/index'
import { Reducer } from 'redux'

interface IState {
  user: User,
  dadosUser:DadosUser,
  IPlanoConta: IPlanoConta[],
  DepositoConta: IDepositoConta
}

const INITIAL_STATE = {
  user: {},
  dadosUser:{},
  IPlanoConta: [],
  DepositoConta:{}
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
        const {IPlanoConta} = action.payload
        console.log(action.payload)
        return{
          ...state,
          IPlanoConta
        }
        case "ADD_DEPOSITO_CONTA":
        const {DepositoConta} = action.payload
        console.log(state)
        return{
          ...state,
          DepositoConta:[
            ...state.DepositoConta,
            DepositoConta
          ] 

        }



      default: {
        return state
      }
  }
}

export default Users