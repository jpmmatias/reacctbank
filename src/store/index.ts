import { createStore } from 'redux'
import allUsers from './modules/user/reducer'

export const store = createStore(allUsers)