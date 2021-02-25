import { IToken, Form, User, LancamentoProps, DadosUser, IPlanoContaComponent, IPlanoConta } from '../../../types/index'
import { Reducer } from 'redux'

interface IState {
  user: User,
}

const INITIAL_STATE = {
  user: {}
}

const Users: Reducer<User | any> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_USER':
      const { user } = action.payload
        console.log(action.payload)
        return {
          ...state,
          user
        }

      default: {
        return state
      }
  }
}

export default Users