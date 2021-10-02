import { useState } from 'react'


export function useBool(initStatus = false){
  const [status, setStatus] = useState<boolean>(initStatus)

  const setTrue = () => {
    setStatus(true)
  }
  
  const setFalse = () => {
    setStatus(false)
  }

  const togglet = (state?: boolean) => {
    const _t = state === undefined ? !status : !!state 
    setStatus(_t)
  }

  const wrapTogglet = () => { togglet() }

  return{
    status,
    setTrue,
    setFalse,
    togglet,
    wrapTogglet
  }
  
}