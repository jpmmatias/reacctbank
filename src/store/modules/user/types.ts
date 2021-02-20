export interface User {
  id: number,
  cpf: number,
  password: string,
  password2: string,
  name: string,
  email: string,
  telephone:  number
}

export interface State {
  users: User[]
}