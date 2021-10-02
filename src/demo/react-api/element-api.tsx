import {
  DEMO
} from '../common'

import {
  createElement,
  cloneElement,
  isValidElement,
  Children,
  createRef,
  ReactNode,
  FC
} from 'react'

const Line:FC = () => {
  return (
    <div style={{ height: '1px', background: 'grey' }}></div>
  )
}

/**
 * 创建元素, jsx编译后的元素创建方法,
 * 类似 vue h / createElement
 */
const Demo1:DEMO = () => {

  // 创建 html 元素
  const text = createElement(
    'div',
    {
      style: {color: 'orange'}
    },
    ['content']
  )
  
  // 创建自定组件
  const line = createElement(Line, {}, [])
  
  return (
    <div>
      {text}
      {line}
    </div>
  )
}

Demo1.title = '创建元素'


const Demo2:DEMO = () => {

  // 创建 html 元素
  const text = createElement(
    'div',
    {
      key: 'source', // 需要添加key作为区分标识
      style: {color: 'orange'}
    },
    ['content', '---------']
  )

  // 元素复制
  const textCopy = cloneElement(
    text,
    {key: 'copy'},
    ['new content'] // 如果存在子元素将被完全替换
  )
  
  return (
    <>
      {
        [
          text,
          textCopy
        ]
      }
    </>
  )
}

Demo2.title = '元素浅复制'


const Demo3:DEMO = () => {

  const text = createElement(
    'div',
    {
      style: {color: 'orange'}
    },
    ['content', '---------']
  )

  const isReactEleByELE = isValidElement(text)
  const isReactEleByText = isValidElement('xxxx')
  
  return (
    <div>
      { `${isReactEleByELE}` } / {`${isReactEleByText}`}
    </div>
  )
}

Demo3.title = '是否为React元素'


// 子元素处理
const Demo4:DEMO = () => {

    // map
    const MapBox:FC = props => {
      const children = props.children
      return (
        <div>
          { Children.map(children, (i, index) => {
            // 遍历子元素并包裹新容器
            return (
              <div style={{padding: '8px 16px'}}>
                {index} : {i}
              </div>
            )
          }) }
        </div>
      )
    }

    // count 数量统计
    const CountBox:FC = props =>{
      const count = Children.count(props.children)
      return (
        <div>
          <span>子元素数量: {count}</span> |
          {props.children}
        </div>
      )
    }
  
    // only 只接收单一子元素
    const OnlyBox:FC = props =>{
      let c:ReactNode
      
      try {
        c = Children.only(props.children)
      } catch (error) {
        c = Children.count(props.children) ?
        'error: 标签内不能包裹多个元素'
        :
        'error: 标签内容包裹元素不能为空'
      }
      
      return (
        <div>
          { c }
        </div>
      )   
    }
    
    // 展开
    const ToArrayBox:FC = props => {
      const c = Children.toArray(props.children)
      console.log(c, props.children)
      return (
        <div>
          {c}
        </div>
      )
    }

  return (
    <div>
      
      // 单一元素
      <MapBox>
        <span> line </span>
      </MapBox>

      // 多元素
      <MapBox>
        <span> line1 </span>
        <span> line2 </span>
      </MapBox>
      
      // 空元素
      <MapBox></MapBox>

      // 统计
      <CountBox>
        1
        2
        3
      </CountBox>

      <CountBox>
        <span></span>
        <span></span>
        <span></span>
      </CountBox>

      <CountBox></CountBox>      
      
      // 单一元素
      <OnlyBox></OnlyBox>
      <OnlyBox>
        <span></span>
        <span></span>
      </OnlyBox>
      <OnlyBox>
        纯文本将报错
      </OnlyBox>
      <OnlyBox>
        { null }
      </OnlyBox>
      
      <OnlyBox>
        <span> 安全 </span>
      </OnlyBox>
      
      // 展开
      <ToArrayBox>
        // 单一元素将包裹在数组中
        <div>line</div>
      </ToArrayBox>
      <ToArrayBox>
        <div> line1 </div>
        <div> line2 </div>
      </ToArrayBox>
      
    </div>
  )
}

Demo4.title = '子元素处理'

export default [
  Demo1,
  Demo2,
  Demo3,
  Demo4,
]