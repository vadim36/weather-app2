import {FC} from 'react'
import { Button } from './Button'

interface MenuBurgerProps {
  toggle: () => void
}
 
export const MenuBurger:FC<MenuBurgerProps> = ({toggle}) => {
  return (
    <Button 
      className='bg-transparent size-16 border-2 border-black p-0'
      onClick={toggle}  
    >
      <img src="../../../public/menu-burger.svg" 
        alt="menu burger icon" />
    </Button>
  )
}