import {
  DEMO
} from '../common'

import {
  ReactNode,
  FC
} from 'react'

import styled from 'styled-components'

const HContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  border-bottom: 1px solid grey;
`
const HTitle = styled.h1`
  font-size: 18px;
`


const Header:FC<{title:string}> = props => {
  const { title, children } = props
  return(
    <HContainer>
      <HTitle> {title} </HTitle>      
      <div> {children} </div>
    </HContainer>    
  )
}



const BContainer = styled.div`
  padding: 8px 12px;
`

const Body:FC = props => {
  return (
    <BContainer>
      {props.children}
    </BContainer>    
  )
}
  
const CContainer = styled.div`
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(100,100,100, .2);
` 

const Card:DEMO = () => {

  return (
    <CContainer>
      <Header title='自定义组件'>
        more
      </Header>
      <Body>
        xxxxxxxxxxxxxxxxxx
        <br />
        xxxxxxxxxxxxxxxxxx
      </Body>
    </CContainer>
  )
}

Card.title = '组件'


// 通过props传入渲染函数
const RenderProp:DEMO = () => {

  interface Render {
    (): ReactNode
  }
  const Child:FC<{render: Render}> = props => {
    return (
      <div>
        {props.render()}
      </div>
    )
  }

  return(
    <div>
      <Child render={
        () => (<h4> render component </h4>)
      }></Child>
    </div>
  )

}

RenderProp.title = '渲染属性'

export default [
  Card,
  RenderProp
]