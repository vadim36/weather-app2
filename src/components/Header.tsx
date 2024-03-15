import {FC} from 'react'
import { Navbar } from './Navbar'
import { Logo } from './Logo'

export const Header:FC = () => {
  return (
    <header className='p-2 border-4 border-blue-500 flex justify-between'>
      <Logo/>
      <Navbar/>
    </header>
  )
}