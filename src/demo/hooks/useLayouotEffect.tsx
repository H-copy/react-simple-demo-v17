import {
  DEMO
} from '../common'

import {
  hooks
} from '../../utils'

import {
  useLayoutEffect,
  useEffect
} from 'react'


/**
 * useLayoutEffect 等价周期钩子 componentDidMount、componentDidUpdate
 * 当需要处理更新后dom元素时使用
 */
const Demo1:DEMO = () => {
  const {
    status,
    wrapTogglet
  } = hooks.useBool()

  useEffect(() => {
    console.log(
      'effect',
      document.querySelector('h4')?.innerHTML
    )
  }, [status])
  
  useLayoutEffect(() => {
    console.log(
      'layout effect',
      document.querySelector('h4')?.innerHTML
    )
  })

  return (
    <div>
      <h4> { status ? 'success' : 'fail' } </h4>
      <button onClick={wrapTogglet}> click </button>
    </div>
  )
}

Demo1.title = 'dom更新后周期钩子'

export default [
  Demo1
]
