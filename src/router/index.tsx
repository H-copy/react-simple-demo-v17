import { FC } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import * as JSX from '../demo/jsx'
import * as Hooks from '../demo/hooks'
import * as ReactAPI from '../demo/react-api'
import * as example from '../demo/example'
import Home from '../demo/home'

export const routerConfig = [

  {
    path: '/',
    name: 'home',
    component:Home
  },
  {
    path: '/jsx',
    name: 'jsx',
    component: JSX.Demo
  },
  {
    path: '/hooks',
    name: 'hooks',
    component: Hooks.Demo
  },
  {
    path: '/react-api',
    name: 'react-api',
    component: ReactAPI.Demo
  },
  {
    path: '/example',
    name: 'example',
    component: example.Demo
  }

]


export const R:FC = () => {
  return (
    <Router>
      <Switch>
        {
          routerConfig.map(i => {
            return (
              <Route exact path={i.path} key={i.path}>
                <i.component></i.component>
              </Route>
            )
          })
        }
      </Switch>
    </Router>
  )
}