import {FC, ReactNode} from 'react'
import { ColorVariants } from '../../utils/enums'

interface ButtonProps {
  children: ReactNode,
  className?:string,
  onClick?: () => void,
  variant?: ColorVariants,
  noTextColor?: boolean
}

export const Button:FC<ButtonProps> = (props) => {
  return (
    <button 
      {...props}
      className={`${props.className ?? ''} bg-sky-700 text-2xl rounded-lg p-2 relative active:top-1 ${props.noTextColor ? '' : 'text-white'} 
      data-[variant="outlined"]:bg-transparent data-[variant="outlined"]:border-2 
      data-[variant="outlined"]:border-black ${props.noTextColor ? '' : 
      'data-[variant="outlined"]:text-black}'}`}
      data-variant={props.variant}
    >
      {props.children}
    </button>
  )
}