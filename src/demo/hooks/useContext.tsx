import {
  DEMO
} from '../common'

import {
  FC,
  useState,
  useContext,
  createContext
} from 'react'


/**
 * useContext 多层级组件通信
 */

const Context = createContext({msg: 'source'}) 

const Content:FC = () => {
  const ctx = useContext(Context)
  return (
    <div>
      { ctx.msg }
    </div>
  )
}

const Middler:FC = () =>{
   return (
     <div>
       <Content></Content>
     </div>
   )
}




const Demo1:DEMO = () => {

  const [ ctx, setCtx ] = useState({
    msg: 'init'
  })


  return (
    <div>
      <Context.Provider value={ctx}>
        <Middler></Middler>
      </Context.Provider> 
      <button onClick={() => setCtx({ msg: `${new Date().getTime()}` })}> change </button>
    </div>
  )  
  
}

Demo1.title = '多层级组件通信'


export default [
  Demo1
]