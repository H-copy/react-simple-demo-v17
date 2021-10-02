import {
  createStore,
  Reducer
} from 'redux'


export interface User{
  id: number,
  name: string
}

export type Token = string

export type Action = {
  type: 'user',
  d: User
} | {
  type: 'token',
  d: Token
}

export interface State {
  user: User,
  token: Token
}

const reducer = (state: State, action:Action) => {
  if(action.type === 'user'){
    return {
      ...state,
      user: action.d
    }
  }

  if(action.type === 'token'){
    return {
      ...state,
      token: action.d
    }
  }

  return state
}


export const store = createStore<State, Action, unknown, unknown>(reducer as any)