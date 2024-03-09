import {FC, FormEvent, useState} from 'react'
import { Button } from '../UI/Button'
import { Input } from '../UI/Input'

interface HeaderProps {
  getLocation: (location: string) => void
}

export const Header:FC<HeaderProps> = ({getLocation}) => {
  const [location, setLocation] = useState<string>('')
  
  return (
    <header className='p-2'>
      <form className='flex gap-2' onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        return getLocation(location)
      }}>
        <Input 
          placeholder='Введите местоположение...'
          value={location}
          onChange={(location: string) => setLocation(location)}
        />
        <Button>
          <img src="../../public/search.svg" alt="search icon" 
            className='size-8'/>
        </Button>
      </form>
    </header>
  )
}