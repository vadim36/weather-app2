import {FC, ReactNode} from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from './UI/Button'
import { ColorVariants } from '../utils/enums'
import { routes } from '../router/index'

export const Navbar:FC = () => {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-2'>
          {routes.map((route: Route):ReactNode => {
            return (
              <li>
                <NavLink 
                  className={({isActive}) => {
                    return isActive ? 'text-blue-500' : ''
                  }}
                  to={route.path}
                >
                  <Button variant={ColorVariants.outlined} noTextColor={true}>
                    {route.title}
                  </Button>
                </NavLink>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}
