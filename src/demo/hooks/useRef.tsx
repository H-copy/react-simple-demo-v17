import {
  DEMO
} from '../common'
import {
  useRef,
  useEffect,
} from 'react'

import { hooks } from '../../utils'

function getTime(){
  return new Date().getTime()
}

/**
 * useRef一般用户缓存Dom,长效值, 中间通信值等
 * useRef 值的改变将不会触发视图的更新,
 * useRef 始终以单例引用的方式存在与组件中, 这里与 useState 每次渲染都产生新的赋值不同
 */
const Demo1:DEMO = () => {
  const {
    status,
    wrapTogglet
  } = hooks.useBool()
  
  const time = useRef(getTime())
  const updateTime = () => {
    console.log('upate time')
    time.current = getTime()
  }

  return (
    <div>
      <h1> { `${status}` } / { time.current }  </h1>
      <button onClick={ updateTime }> updateTime </button>
      <button onClick={ wrapTogglet }> reload </button>
    </div>
  )
}

Demo1.title = '不触发视图更新'


const Demo2:DEMO = () => {
  const ele = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('get element', ele.current)
    if(ele.current){
      ele.current.setAttribute(
        'style',
        'color: orange'
      ) 
    }
  }, [ele])

  return (
    <div ref={ele}>
      content
    </div>
  )
}

Demo2.title = '获取DOM'

export default [
  Demo1,
  Demo2
]