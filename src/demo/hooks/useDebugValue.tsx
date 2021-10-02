import {
  DEMO
} from '../common'

import {
  hooks
} from '../../utils'

import {
  useDebugValue
} from 'react'

const Demo1:DEMO = () => {
  const {
    status,
    wrapTogglet
  } = hooks.useBool()

  useDebugValue(status)
  
  return (
    <div>
      { status ? 'up' : 'down' }
      <button onClick={wrapTogglet}> change </button>
    </div>
  )
}

Demo1.title = 'debug'

export default [
  Demo1
]