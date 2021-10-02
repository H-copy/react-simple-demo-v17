import {
  DEMO
} from '../common'

import{
  FC,
  useLayoutEffect,
  Children,
  cloneElement
} from 'react'

import {
  render,
  unmountComponentAtNode,
  createPortal
} from 'react-dom'



const Demo1:DEMO = () => {

  useLayoutEffect(() =>{
    const ele = document.querySelector('.render')
    render(<h4> dynamic content </h4>, ele)
  })

  return (
    <div className='render'>
      content 原内容将被替换
    </div>
  )
}

Demo1.title = '渲染函数'


const Demo2:DEMO = () => {

  const c = (<h4> 3s后卸载 </h4>)

  useLayoutEffect(() =>{
    const ele = document.querySelector('.out') as Element
    render(c, ele)
    setTimeout(() =>{
      console.log('卸载')
      unmountComponentAtNode(ele)
    }, 3000)
  })

  
  return (
    <div className='out'></div>
  )
}

Demo2.title = '卸载'

const Demo3:DEMO = () => {

  const P:FC = props =>{

    useLayoutEffect(() => {
      const ele = document.querySelector('.portal-target')
      if(ele){
        createPortal(props.children, ele)
      }
    })
    return(
      <div>
        {props.children}
      </div>
    )
  }

  return (
    <div>
      -----------
      <div className='portal-target'>
      </div>
      -----------
      <P>
        <span> line1 </span>
      </P>
    </div>
  )
}

Demo3.title = '指定子元素渲染容器'

export default[
  Demo1,
  Demo2,
  Demo3
]