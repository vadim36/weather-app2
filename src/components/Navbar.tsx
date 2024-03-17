import {FC, ReactNode} from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from './UI/Button'
import { ColorVariants } from '../utils/enums'
import { routes } from '../router/index'

interface NavbarProps {
  isShow: boolean
}

export const Navbar:FC<NavbarProps> = ({ isShow }) => {
  return (
    <nav className={`flex items-center ${!isShow && 'hidden'} absolute t-0 z-20 
      bg-white border-2 rounded p-5 `}
    >
      <ul className='flex gap-2'>
          {routes.map((route: Route):ReactNode => {
            return (
              <li key={route.title}>
                <NavLink 
                  className={({isActive}) => {
                    return isActive ? 'text-blue-500' : ''
                  }}
                  to={route.path}
                >
                  <Button variant={ColorVariants.outlined}>
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
