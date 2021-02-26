import { IToken, Form, User, LancamentoProps, DadosUser, IPlanoContaComponent, IPlanoConta } from '../../../types/index'
import { Reducer } from 'redux'

interface IState {
  user: User,
  dadosUser:DadosUser,
}

const INITIAL_STATE = {
  user: {},
  dadosUser:{}
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
      default: {
        return state
      }
  }
}

export default Users