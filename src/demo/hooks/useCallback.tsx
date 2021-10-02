import {
  DEMO
} from '../common'

import {
  hooks
} from '../../utils'

import {
  useCallback,
  useEffect,
  useState,
} from 'react'


/**
 * useCallback 包裹后的函数, 只在依赖更新时做重新赋值
 * 一般用来优化部分存在外部依赖的函数，或大计算量函数
 */
const Demo1:DEMO = () => {

  const {
    status,
    wrapTogglet
  } = hooks.useBool()
  
  const defFn = () => {
    console.log('defFn', status)
  }

  const wrapFn = useCallback(() => {
    // 闭包缓存了初始值
    console.log('wrapFn', status)
    // 只做初始赋值
  }, [])

  // 监听函数修改
  useEffect(() => {
    console.log('defn change')
  }, [defFn])

  
  useEffect(() => {
    console.log('wrapFn change')
  }, [wrapFn])

  return (
    <div>
      <h4> { `${status}` } </h4>
      状态变化时, wrapFn 将不做更新
      <button onClick={ wrapTogglet }> change </button>
      <button onClick={ defFn }> get def value </button>
      <button onClick={ wrapFn }> get wrap value </button>
    </div>
  )
}

Demo1.title = '函数依赖'


export default [
  Demo1
]
