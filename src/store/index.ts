import { createStore } from 'redux'

import Users from './modules/user/reducer'

export const store = createStore(Users)