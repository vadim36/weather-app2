import {ChangeEvent, FC, useState, useContext, FormEvent} from 'react'
import { Input } from './UI/Input'
import { Button } from './UI/Button'
import { LocationContext } from '../context'

export const LocationForm:FC = () => {
  const [inputLocation, setInputLocation] = useState<string>('') 
  const {setLocation, setIsLocation} = useContext(LocationContext)

  function submitHandler(event: FormEvent<HTMLFormElement>):void {
    event.preventDefault()
    setLocation(inputLocation)
    setInputLocation('')
    return setIsLocation(true)
  }

  return (
    <form 
      className='flex gap-2'
      onSubmit={submitHandler}
    >
      <Input
        value={inputLocation}
        onChange={(event: ChangeEvent<HTMLInputElement>):void => {
          return setInputLocation(event.target.value)
        }}
      />
      <Button className='size-12'>
        <img src="../../public/search.svg" alt="search icon"/>
      </Button>
    </form>
  )
}