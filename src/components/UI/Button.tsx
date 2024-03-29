import {FC, ReactNode} from 'react'

interface ButtonProps {
  children: ReactNode,
  className?:string,
  onClick?: () => void
}

export const Button:FC<ButtonProps> = (props) => {
  return (
    <button 
      {...props}
      className={`bg-sky-700 text-2xl rounded-lg p-2 relative active:top-1 
      text-white ${props.className ?? ''}`}
    >
      {props.children}
    </button>
  )
}