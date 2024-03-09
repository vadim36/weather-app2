import {ChangeEvent, FC} from 'react'

interface InputProps {
  placeholder?: string,
  value?:string,
  onChange?: (value: string) => void
}

export const Input:FC<InputProps> = (props) => {
  return (
    <input type="text" className='outline outline-1 rounded w-64 px-2 
    text-xl' {...props} onChange={(event: ChangeEvent<HTMLInputElement>):void => {
      return props.onChange!(event.target.value)
    }}/>
  )
}