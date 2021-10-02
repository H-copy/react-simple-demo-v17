import { DEMO } from '../../common'


const Demo1:DEMO = () => {

  // 内联样式
  const style = {
    padding: '8px 16px',
    color: 'blue',
  }

  return (
    <div style={style} >
      inline css
    </div>
  )
}

Demo1.title = '内联样式'


import './index.css'
const Demo2:DEMO = () => {
  
  return (
    <div className='css-file'> css module </div>
  )
}

Demo2.title = 'css file'


import cssModule from './index.module.css'

const Demo3:DEMO = () =>{
  return (
    <div className={cssModule.module}> css module </div>
  )
}

Demo3.title = 'css module'


import './less.less'

const Demo4:DEMO = () => {
  
  return (
    <div className='less'>
      less css
    </div>
  )
}

Demo4.title = 'less'

import styled from 'styled-components'

const CssInJs = styled.div`
  padding: 8px 16px;
  color: blue;
`

const Demo5:DEMO = () => {
  return (
    <CssInJs> css in js </CssInJs>
  )
}

Demo5.title = 'styled'


export default [
  Demo1,
  Demo2,
  Demo3,  
  Demo4,  
  Demo5,  
]