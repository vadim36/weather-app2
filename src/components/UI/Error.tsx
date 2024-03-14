import {FC} from 'react'

interface ErrorProps {
  message: string
}

export const Error:FC<ErrorProps> = ({message}) => {
  return (
    <h2 className='font-semibold text-xl text-center'>Error {message}</h2>
  )
}