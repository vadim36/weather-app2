import {FC} from 'react'

interface AlertProps {
  body: string,
  variant?: 'primary' | 'danger'
}

export const Alert:FC<AlertProps> = ({body, variant}) => {
  return (
    <div 
      className='bg-indigo-600/50 w-full text-2xl rounded flex justify-center 
      items-center h-auto p-2 data-[variant="danger"]:bg-rose-700 
      data-[variant="danger"]:text-white data-[variant="danger"]:font-semibold'
      data-variant={variant}
    >
      {body}
    </div>
  )
}