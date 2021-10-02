/**
 * jsx 语法
 */
import { FC } from 'react'


// 自定义组件
const Card:FC<{ title:string }> = props => {
  return (
    <div className='card'>
      <h1> { props.title } </h1>
    </div>
  )
}

const List:FC = props => (
    <ul>
      {props.children}
    </ul>
)

const Item:FC = props => (
  <li>
    { props.children }
  </li>
)

// 多组件对象
const Group = {
  List,
  Item
}

export const Demo:FC = () => {
  const title = 'dynamic-data'
  const getMsg = () => 'back msg'
  
  return (
    <>
      // 标签元素写法与html一致
      <div></div>

      // 标签或内容嵌套
      <div>
        <h1> title </h1>
        <p> content </p>
      </div>

      // 标签属性写法与html基本一致，除类使用'className' 替代 'class'
      <div className='base' ></div>

      // 动态属性使用中括号绑定
      <h1> { title } </h1>
      <div style={{ width: '100px', height: '100px' }}></div>

      // 单一属性，默认值为true
      <button disabled> click </button>

      // 解构赋值，同时赋值多个属性
      <div {...{ id:'xxx', className: 'xx' }}></div>

      // 事件使用小驼峰命名, 绑定时需要注意this指向
      <button onClick={ () => console.log('click') }></button>

      // 使用表达式
      <div>
        // 三元表达式控制内容或元素的显示
        { true ? 'show' : 'hidden' }
        // 调用函数
        { getMsg() }
      </div>

      // 列表
      {
        [1, 2, 3].map(num => (
          <span key={num}> { num } </span>
        ))
      }
    
      // 动态值为: null、false、true、undefined、将不会显示
      {
        [
          null,
          false,
          true,
          undefined
        ].map((i, index) => (
          <div key={index}> { i } </div>
        ))
      }

      // 将空值转为字符显示
     {
       [
        null,
        false,
        true,
        undefined
      ].map((i, index) => (
        <div key={index}> { `${i}` } </div>
      ))
     }

     // 使用自定义组件
     // 组件必须为大写开头
     <Card title={title}></Card>
    
    // 组件可以使用'.'运算符
    <Group.List>
      <Group.Item>
        01
      </Group.Item>
      <Group.Item>
        02
      </Group.Item>
    </Group.List>
    </>
  )
} 