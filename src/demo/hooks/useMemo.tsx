import {
  DEMO
} from '../common'

import {
  hooks
} from '../../utils'

import{
  useMemo
} from 'react'


/**
 * useMemo 类似 vue 的computed, 缓存一些需要计算后的值,
 */
const Demo1:DEMO = () => {
  const {
    status,
    wrapTogglet
  } = hooks.useBool()

  const statusStr = useMemo(() => {
    return status ? '是' : '否'
  }, [status])

  const initStatusStr = useMemo(() => {
    return status ? '是' : '否'
  }, [])
  
  return (
    <div>
      <h4> {statusStr} / {initStatusStr} </h4>
      <button onClick={wrapTogglet}> change </button>
    </div>
  )
}

Demo1.title = '计算属性'


export default [
  Demo1
]



