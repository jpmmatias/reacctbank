import { User } from './types';

export function addNewUser(user: User) {
  return {
    type: 'ADD_USER',
    payload: {
      user
    }
  }
}