export * as hooks from './hooks'

export function random(base:number = 10):number{
  return Number.parseInt(`${Math.random() * base}`)
}

