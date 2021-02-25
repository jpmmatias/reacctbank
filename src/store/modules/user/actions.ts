import { User } from '../../../types';

export function UserInfo(user: User) {
  return {
    type: 'ADD_USER',
    payload: {
      user
    }
  }
}