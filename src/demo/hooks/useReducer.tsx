import {
  DEMO
} from '../common'

import {
  useReducer
} from 'react'

interface State {
  status: string
  msg: string
}

interface Action{
  type: number
  value?: string
}

const condition = [
  () => 'wait',
  () => 'start',
  () => 'loading',
  () => 'success',
  () => 'fail',
]

function reducer(state: State, action: Action):State {
  return { ...state, status: condition[action.type]() || condition[0]() }
}

/**
 * useReducer 提供一种处理复杂状态解构的机制
 */
const Demo1:DEMO = () =>{
  const [state, dispatch] = useReducer(reducer, {status: 'wait', msg: ''})

  return (
    <div>
      <h4> { state.status } </h4>
      {
        condition.map((fn, index) => (
           <button key={index} onClick={() => {dispatch({type: index})}}> { fn() } </button>
        ))
      }
    </div>
  )
}

Demo1.title = '复杂结构更新'

export default [
  Demo1
]