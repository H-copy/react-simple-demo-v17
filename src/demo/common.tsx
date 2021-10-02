import { FC } from 'react'

export type DEMO = FC & { title:String }


export const CreatDemo:FC<{list: any[], title?: string}> = (props) => {
  return (
    <div>
      <h2> { props.title } </h2>
      {
        props.list.map((Demo, index) => (
          <div key={index}>
            <h4> { Demo.title } </h4>
            <Demo></Demo>
          </div>
        ))
      }
    </div>
  )
}