import { FC } from 'react'
import Base from './base'
import UseState from './useState'
import UseEffect from './useEffect'
import UseContext from './useContext'
import UseRef from './useRef'
import UseCallback from './useCallback'
import UseMemo from './useMemo'
import UseReducer from './useReducer'
import UseImperativeHandle from './useImperativeHandle'
import UseLayouotEffect from './useLayouotEffect'
import UseDebugValue from './useDebugValue'
import useCustom from './useCustom'

import './index.less'

import {
  CreatDemo
} from '../common'

export const Demo:FC = () =>{
  return (
    <div className='container'>
      <CreatDemo list={Base} title='base'  />
      <CreatDemo list={UseState} title='useState' />
      <CreatDemo list={UseEffect} title='useEffect' />
      <CreatDemo list={UseContext} title='useContext' />
      <CreatDemo list={UseRef} title='useRef' />
      <CreatDemo list={UseCallback} title='useCallback' />
      <CreatDemo list={UseMemo} title='useMemo' />
      <CreatDemo list={UseReducer} title='useReducer' />
      <CreatDemo list={UseImperativeHandle} title='useImperativeHandle' />
      <CreatDemo list={UseLayouotEffect} title='useLayouotEffect' />
      <CreatDemo list={UseDebugValue} title='useDebugValue' />
      <CreatDemo list={useCustom} title='useCustom' />
    </div>
  )
}