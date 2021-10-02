import { FC } from 'react'
import './index.less'
import {
  CreatDemo
} from '../common'

import elementAPI from './element-api'
import domAPI from './dom'

export const Demo:FC = () =>{
  return (
    <div className='container'>
      <CreatDemo list={elementAPI} title='element api'  />
      <CreatDemo list={domAPI} title='dom api'  />
    </div>
  )
}