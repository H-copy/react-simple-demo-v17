import {
  FC
} from 'react'

import {
  Link
} from 'react-router-dom'

import { routerConfig } from '../router'

const Home:FC = () => {
  return (
    <div>
      {
        routerConfig.map(i => {
          return (
            <div key={i.name}>
              <Link to={i.path}> { i.name } </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home