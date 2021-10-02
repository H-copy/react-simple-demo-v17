import {
  DEMO
} from '../common'

import {
  useState,
  useCallback,
  useMemo,
} from 'react'


function useList(init: number[]){
  const [list, setList] = useState<number[]>(init)
  const push = useCallback((d:number) => {
    setList([...list, d])
  }, [list])

  const inset = useCallback((p:number, d:number) => {
    const _l = list.splice(p, 0, d)
    setList([..._l])
  }, [list])

  const pop = useCallback(() => {
    const _l = list.splice(list.length - 1, 1)
    setList([..._l])
  }, [list])
  
  return {
    list,
    push,
    inset,
    pop
  }
}

function useHistory(first?:number){
  const { list:history, push } = useList( first === undefined ? [] : [first])
  const [ position, setPosition ] = useState<number>(0)
  const current = useMemo(() => history[position], [history, position])

  const prev = useCallback(() => {
    if(position){
      setPosition(position - 1)
    }
  }, [position])

  const next = useCallback(() => {
    if(position < history.length - 1){
      setPosition(position + 1)
    } 
  }, [position, history])
  
  const create = useCallback(() => {
    push(new Date().getTime())
  }, [push])
  

  return {
    history,
    current,
    prev,
    next,
    create
  }
}

// 自定义 hook
const Demo1:DEMO = () => {
  const {
    history,
    current,
    prev,
    next,
    create
  } = useHistory()

  const len = useMemo(() => history.length, [history.length])


  return (
    <div>
      <h4> {len} / {current} </h4>
      <button onClick={prev}> prev </button>
      <button onClick={next}> next </button>
      <button onClick={create}> create </button>
    </div>
  )
}

Demo1.title = '自定义时间回溯钩子'

export default [
  Demo1
]