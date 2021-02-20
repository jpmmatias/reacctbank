import { State } from './types';
import { Reducer } from 'redux'

const INITIAL_STATE = {
  users: []
}

const allUsers: Reducer<State | any> = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_USER':
      const { user } = action.payload
        console.log(action.payload)
        return {
          ...state,
          users: [
            ...state.users,
            user
          ]
        }

      default: {
        return state
      }
  }
}

export default allUsers