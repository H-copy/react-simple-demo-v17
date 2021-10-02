import {
  DEMO
} from '../common'
import {
  useEffect,
  useState
} from 'react'
import { hooks } from '../../utils'


/**
 * 基础使用
 * effect 通常用来处理因状态修改，带来的相关副作用. 
 * 例如 信息打印, 数据请求, 关联数值修改  
 * effect 接收两个参数,  1.副作用执行函数,  2.相关依赖 
 */
const Demo1:DEMO = () => {

  const {
    status,
    wrapTogglet
  } = hooks.useBool()

  const [ statusStr, setStatusStr ] = useState('')

  useEffect(() => {
    setStatusStr(status ? '开' : '关')
  }, [status])
  
  return(
    <div>
      <h1> { statusStr } </h1>
      <button onClick={ wrapTogglet }> change </button>
    </div>
  )
}

Demo1.title = '基础使用'


/**
 * 初始执行一次, 当依赖为空数组时.
 * effect 等价周期钩子 componentDidMount
 */

const Demo2:DEMO = () => {
  
  const {
    status,
    wrapTogglet
  } = hooks.useBool()

  const [ statusStr, setStatusStr ] = useState('')

  useEffect(() => {
    console.log('useEffect first')
    setStatusStr(status ? '开' : '关')
  }, [])
  
  return(
    <div>
      <h1> { statusStr } </h1>
      <button onClick={ wrapTogglet }> change </button>
    </div>
  )
}

Demo2.title = '模拟初始周期钩子'

/**
 * 依赖为空时, 每次渲染都将执行
 */
const Demo3:DEMO = () => {
  
  
  const {
    status,
    wrapTogglet
  } = hooks.useBool()

  const [ statusStr, setStatusStr ] = useState('')

  useEffect(() => {
    console.log('useEffect active')
    setStatusStr(status ? '开' : '关')
  })
  
  return(
    <div>
      <h1> { statusStr } </h1>
      <button onClick={ wrapTogglet }> change </button>
    </div>
  )
}

Demo3.title = '无依赖'


/**
 * 如果 effect 内返回函数, 该函数将在组件注销前执行
 */
const Demo4:DEMO = () => {

  const {
    status,
    wrapTogglet
  } = hooks.useBool()

  const [ statusStr, setStatusStr ] = useState('')

  console.log('init')

  useEffect(() => {
    setStatusStr(status ? '开' : '关')
    return () => {
      console.log('destroy')
    }
  })
  
  return(
    <div>
      <h1> { statusStr } </h1>
      <button onClick={ wrapTogglet }> change </button>
    </div>
  )
}

Demo4.title = '返回函数'

export default [
  Demo1,
  Demo2,
  Demo3,
  Demo4
]