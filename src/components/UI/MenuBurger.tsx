import {FC, useState} from 'react'
import { Button } from './Button'
import { ColorVariants } from '../../utils/enums'
import * as stylex from '@stylexjs/stylex'

interface MenuBurgerProps {
  toggleElement: () => void
}
 
const MENU_BURGER_STYLES = stylex.create({
  base: {
    padding: null,
    width: '4rem',
    aspectRatio: '1'
  },
  animate: {
    transformOrigin: 'center',
    transition: '.25s linear',
    y: 45
  },
  rotated: {
    rotate: '45deg',
  },
  rotatedInverse: {
    rotate: '-45deg',
  },
  hide: {
    opacity: 0
  }
})

export const MenuBurger:FC<MenuBurgerProps> = ({toggleElement, ...props}) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  function toggle():void {
    setExpanded((prev: boolean):boolean => !prev)
    return toggleElement()
  }
  
  return (
    <Button 
      variant={ColorVariants.outlined} 
      active={false}
      styles={MENU_BURGER_STYLES.base}
      onClick={toggle}
      aria-expanded={expanded}
      {...props}
    >
      <svg viewBox="0 0 100 100" fill="none">
        <rect stroke='#000' width='80' 
          height='12' x='10' y='20' rx='5' fill='#000'
          {...stylex.props(expanded && MENU_BURGER_STYLES.rotated,
            expanded && MENU_BURGER_STYLES.animate
          )}
        />
        <rect stroke='#000' width='80' 
          height='12' x='10' y='45' rx='5' fill='#000'
          {...stylex.props(expanded && MENU_BURGER_STYLES.hide)}
        />
        <rect stroke='#000' width='80' 
          height='12' x='10' y='70' rx='5' fill='#000'
          {...stylex.props(expanded && MENU_BURGER_STYLES.rotatedInverse,
            expanded && MENU_BURGER_STYLES.animate
          )}
        />
      </svg>
    </Button>
  )
}