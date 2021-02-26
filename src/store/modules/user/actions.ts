import { User, DadosUser } from '../../../types';

export function UserInfo(user: User) {
  return {
    type: 'ADD_USER',
    payload: {
      user
    }
  }
}

export function DadosUserInfo (dadosUser:DadosUser){
  return{
    type:"ADD_DADOS_USER",
    payload:{
      dadosUser
    }
  }
}