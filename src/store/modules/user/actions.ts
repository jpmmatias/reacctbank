import { User, DadosUser, IPlanoConta, IDepositoConta} from '../../../types';

export function UserInfo(user: User) {
  return {
    type: 'ADD_USER',
    payload: {
      user
    }
  }
}

export function DadosUserInfo (dadosUser: DadosUser){
  return{
    type:"ADD_DADOS_USER",
    payload:{
      dadosUser
    }
  }
}

export function IPlanoContaInfo (IPlanoConta: IPlanoConta){
  return{
    type:"ADD_IPLANO_CONTA",
    payload:{
      IPlanoConta
    }
  }
}

export function DepositoContaInfo (DepositoConta: IDepositoConta){
  return{
    type:"ADD_DEPOSITO_CONTA",
    payload:{
      DepositoConta
    }
  }
}