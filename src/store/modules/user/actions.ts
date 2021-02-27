import { User, DadosUser, IPlanoConta, IDepositoConta, IPagamentoConta} from '../../../types';

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

export function PlanoContaInfo (PlanoConta: IPlanoConta){
  return{
    type:"ADD_IPLANO_CONTA",
    payload:{
      PlanoConta
    }
  }
}

export function AddPlanosConta(PlanosConta:IPlanoConta[]){
  return{
    type:"ADD_PLANOS_CONTA",
    payload:{
      PlanosConta
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

export function PagamentoContaInfo (PagamentoConta: IPagamentoConta){
  return{
    type:"ADD_PAGAMENTO_CONTA",
    payload:{
      PagamentoConta
    }
  }
}

export function UpdateSaldoContaBanco(valor:number){
  return{
    type:"UPDATE_SALDO_CONTA_BANCO",
    payload:{
      valor
    }
  }
}

export function UpdateSaldoContaCredito(valorCredito:number){
  return{
    type:"UPDATE_SALDO_CONTA_CREDITO",
    payload:{
      valorCredito
    }
  }
}

export function SetScreen(SetScreen:React.Dispatch<any>){
  return{
    type:"SET_SCREEN",
    payload:{
      SetScreen
    }
  }
}