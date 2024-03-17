import {FC, ReactNode} from 'react'
import { ColorVariants } from '../../utils/enums'
import * as stylex from '@stylexjs/stylex'

interface ButtonProps {
  children: ReactNode,
  variant?: ColorVariants,
  onClick?: () => void,
  active?: boolean,
  styles?: stylex.StyleXStyles,
}

const BUTTON_STYLES = stylex.create({
  base: {
    fontSize: '1.35rem',
    lineHeight: '1.75rem',
    borderRadius: '.5rem',
    padding: '.5rem'
  },
  active: {
    position: 'relative',
    transition: '.1s linear',
    ':active': { top: '.25rem' },
    ':hover': { backgroundColor: '#000', color: '#FFF' }
  },
  primary: {
    backgroundColor: 'rgb(3 105 161)',
    color: '#FFF'
  },
  outlined: {
    border: '2px solid #000',
  }
})

export const Button:FC<ButtonProps> = ({
  children, 
  variant = ColorVariants.primary,
  active = true,
  styles,
  ...props
}) => {
  return (
    <button {...stylex.props(
      BUTTON_STYLES.base,
      active && BUTTON_STYLES.active,
      BUTTON_STYLES[variant],
      styles
    )} {...props}>
      {children}
    </button>
  )
}