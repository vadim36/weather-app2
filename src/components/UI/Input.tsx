import {ChangeEventHandler, FC, HTMLInputTypeAttribute} from 'react'

interface InputProps {
  type?: HTMLInputTypeAttribute,
  placeholder?: string,
  className?: string,
  value?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input:FC<InputProps> = (props) => {  
  return (
    <input
      {...props}
      type={props.type ?? 'text'} 
      className={`outline outline-1 rounded px-2 text-2xl ${props.className}`}
    />
  )
}