import {FC} from 'react'
import { LocationForm } from './LocationForm'
import { MenuBurger } from './UI/MenuBurger'

interface HeaderProps {
  toggleAside: () => void
}

export const Header:FC<HeaderProps> = ({toggleAside}) => {
  return (
    <header className='p-2 border-4 border-blue-500 flex'>
      <LocationForm/>
      <MenuBurger toggle={toggleAside}/>
    </header>
  )
}