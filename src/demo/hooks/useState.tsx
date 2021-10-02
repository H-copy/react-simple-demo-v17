import { DEMO } from '../common'
import { useState } from 'react'


/**
 * useState接收任意值作为初始状态, 
 * 返回包含[初始值, 更新方法]的数组
 */
const Demo1:DEMO = () => {
  const [state, setState] = useState(false)

  return (
    <div>
      <h1> { `${state}` } </h1>
      <button onClick={() => setState(!state)}> change </button>
    </div>
  )
}

Demo1.title = '基本使用'

/**
 * useState 返回的设置函数,也可以接收函数作为参数,
 * 该函数将获取到上以更新值
 */
const Demo2:DEMO = () => {
  const [state, setState] = useState(false)
  const changeHandler = () => {
    setState((preVal) => {
      console.log('old value', preVal)
      return !preVal
    })
  }

  return (
    <div>
      <h1> { `${state}` } </h1>
      <button onClick={ changeHandler }> change</button>
    </div>
  )
}

Demo2.title = '获取上次更新值'

export default [
  Demo1,
  Demo2
]