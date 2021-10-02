import { DEMO } from '../common'


import {
  useState,
  createContext,
  useContext,
  useEffect,
  BaseSyntheticEvent,
  FC
} from 'react'

const Demo1:DEMO = () => {
  const [content, changeContent] = useState('init')

  const change = (d:string) => {
    changeContent(d)
  }

  const Child:FC<{content: string, change: (d:string) => void}> = (props) => {
    return (
      <div>
        { props.content }
        <button onClick={() => props.change && props.change('from child')}> change </button>
      </div>
    )
  }
  
  return (
    <div>
      <Child content={content} change={change}></Child>
    </div>
  )
}

Demo1.title = '父子通信'

const Demo2:DEMO = () => {
  const [mdl, setMdl] = useState(0)
  const add = () => { setMdl(mdl + 1) }
  const sub = () => { setMdl(mdl - 1) }

  const Child:FC<{ change: () => void }> = props => {
    return (
      <button onClick={props.change}> {props.children} </button>
    )
  }

  return (
    <div>
      <h4> {mdl} </h4>
      <Child change={add}> add </Child>
      <Child change={sub}> sub </Child>
    </div>
  )
  
}

Demo2.title = '兄弟通信'

const Ctx = createContext({state: '' , change: (d:string) => {}})

const Demo3:DEMO = () => {

  const [state, setState] = useState('init')
  const action = {
    state,
    change: (d:string) => { setState(d) }  
  }

  const Child:FC = () => {
    const ctx = useContext(Ctx)
    return (
      <div>
        { ctx.state }
        <button onClick={() => ctx.change('from child')}> chagne </button>
      </div>
    )
  }
  
  
  return (
    <div>
      <Ctx.Provider value={action}>
        <div>
          <Child></Child>
        </div>
      </Ctx.Provider>
    </div>
  )
}

Demo3.title = 'context'


const state = {
  msg: '',
  
}


import { store } from '../../state'

store.dispatch({
  type:'user',
  d: {id: 0, name: 'cccc'}
})

const Demo4:DEMO = () => {
  const [user, setUser] = useState(store.getState().user)
  const [name, setName] = useState('')

  store.subscribe(() => {
    const d = store.getState()
    setUser(d.user)
  })

  const onInput = (e:BaseSyntheticEvent) => {
    setName(e.target.value)
  }
  
  const setUserName = () => {
    store.dispatch({type: 'user', d: {...user, name}})
  }
  
  return(
    <div>
      { user.id } / { user.name }
      <input value={name} onInput={onInput}></input>
      <button onClick={setUserName}>submit</button>
    </div>
  )

}

Demo4.title = 'redux'

export default [
  Demo1,
  Demo2,
  Demo3,
  Demo4,
]