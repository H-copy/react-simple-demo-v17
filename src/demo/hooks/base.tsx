import { 
  FC,
  useState,
  Dispatch,
  SetStateAction
} from 'react'
import {
  DEMO
} from '../common'

import * as utils from '../../utils'

let renderTimes = 0

// 每次修改状态值, 都将更新视图, 组件函数将被重复调用
const Demo1:DEMO = () =>{
  renderTimes++
  const [number, setNumber] = useState<number>(0)

  const changeHandler = () => {
    setNumber(utils.random())
  } 

  return (
    <div>
      { number } / { renderTimes } 
      <button onClick={changeHandler}> change </button>
    </div>
  )
}

Demo1.title = '更新'


// 注意闭包产生的引用问题
const Demo2:DEMO = () => {
  
  const [count, setCount] = useState(0)
  
  /**
   * 应为渲染函数视图更新时都将执行,
   * 所以每次将构建一次 delyHanlder 函数
   * setTimeout内使用了 count 引用。 
   * 形成局部闭包, 在新的视图更新后，
   * 部分之前的延时函数内还保留了对于以前变量的引用。
   * 造成 1.内存没有及时回收 2. 数值渲染错误
   */
  const delyHandler = () => {
    console.log('dispatch dely')
    setTimeout(() => {
      setCount(count+1)
    }, 1000)
  }
  
  const clickHandler = () => {
    console.log('dispatch click')
    setCount(count + 1)
  }
  
  return (
    <div>
      <div> { count } </div>
      <button onClick={clickHandler}> click </button>
      <button onClick={delyHandler}>  dely </button>
    </div>
  )
}

Demo2.title = '引用'


// 
/**
 * 由于hook的实现与hook的调用顺序有关,
 * 所以hook只能在组件最外层作用域内执行,
 * 不能被 if, for, function 等局部作用域包裹使用
 */
//  hook 只能在组件的最外层作用域内
const Demo3:DEMO = () => {

  const [ outStatus, setOutStatus ] = useState<boolean>(false)
  let innerStatus:boolean = false
  let setInnerStatus: Dispatch<SetStateAction<boolean>>
    
  if(outStatus){
    [ innerStatus, setInnerStatus ] = useState<boolean>(false) 
  }

  return (
    <div>
      <div>
        <h4> out { outStatus } </h4>
        <button onClick={() => setOutStatus(!outStatus)}> change </button>
      </div>
      <div>
        <h4> inner { innerStatus } </h4>
        <button onClick={() => setInnerStatus && setInnerStatus(!innerStatus)}> change </button>
      </div>
    </div>
  )
}

Demo3.title = '执行作用域'


export default [
  Demo1,
  Demo2,
  Demo3,
]

