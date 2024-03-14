import {FC} from 'react'

interface AlertProps {
  body: string
}

export const Alert:FC<AlertProps> = ({body}) => {
  return (
    <div className='bg-indigo-600/50 w-full text-2xl h-12 rounded
    flex justify-center items-center'>
      {body}
    </div>
  )
}