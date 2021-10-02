import {
  DEMO
} from '../common'

import {
  hooks
} from '../../utils'

import {
  FC,
  useImperativeHandle,
  useEffect,
  useRef,
  RefObject,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'


const Child:ForwardRefRenderFunction<unknown, {}> = (__, ref) => {
  const {
    status,
    setTrue,
    setFalse
  } = hooks.useBool()

  const container = useRef(null)
  
  useImperativeHandle(ref, () => {
    return {
      container: container.current,
      open: () => setTrue(),
      close: () => setFalse(),
    }    
  }, [setTrue, setFalse])

  return (
    <div ref={container}>
      { status ? '开' : '关' }
    </div>
  )
    
}

const RefChild = forwardRef(Child)


/**
 * useImperativeHandle 提供了一种自定义返回 ref 的方式
 * 
 */
const Demo1:DEMO = () => {
  const child = useRef<{open: () => void, close: () => void, container: Element}>(null)
  let open: () => void
  let close: () => void

  useEffect(() => {
    if(child.current){
      open = child.current.open
      close = child.current.close
      console.log(child.current.container)
    }
  }, [child])

  
  return (
    <div>
      <RefChild ref={child}></RefChild>
      <button onClick={() => open && open()}> open </button>
      <button onClick={() => close && close()}> close </button>
    </div>
  )
  
}

Demo1.title = '自定义ref'

export default [
  Demo1
]