import {FC, useState} from 'react'
import { Navbar } from './Navbar'
import { Logo } from './Logo'
import { MenuBurger } from './UI/MenuBurger'

export const Header:FC = () => {
  const [isNavbarShow, setIsNavbarShow] = useState<boolean>(false)

  function toggleNavbar():void {
    return setIsNavbarShow((prev: boolean):boolean => !prev)
  }

  return (
    <header className='p-2 border-4 border-blue-500 flex justify-between'>
      <Logo/>
      <MenuBurger toggleElement={toggleNavbar}/>
      <Navbar isShow={isNavbarShow}/>
    </header>
  )
}