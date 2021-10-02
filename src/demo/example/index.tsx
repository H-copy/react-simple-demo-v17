import { FC } from 'react'
import './index.less'
import {
  CreatDemo
} from '../common'

import cssInJs from './css'
import communication from './communication'
import component from './component'

export const Demo:FC = () =>{
  return (
    <div className='container'>
      <CreatDemo list={cssInJs} title='css in js'  />
      <CreatDemo list={communication} title='communication'  />
      <CreatDemo list={component} title='component'  />
    </div>
  )
}