import {FC} from 'react'
import { LocationForm } from './LocationForm'

export const Header:FC = () => {
  return (
    <header className='p-2 border-4 border-blue-500'>
      <LocationForm/>
    </header>
  )
}