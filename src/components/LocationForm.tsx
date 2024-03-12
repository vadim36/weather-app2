import {ChangeEvent, FC, FormEvent, useContext, useState} from 'react'
import { Input } from './UI/Input'
import { Button } from './UI/Button'
import { LocationContext } from '../context'

export const LocationForm:FC = () => {
  const {setLocation} = useContext(LocationContext)
  const [inputValue, setInputValue] = useState<string>('')

  function submitHandler(event: FormEvent<HTMLFormElement>):void {
    event.preventDefault()
    setInputValue('')
    return setLocation(inputValue)
  }

  return (
    <form 
      className='flex items-stretch gap-2 justify-center'
      onSubmit={submitHandler}
    >
      <Input 
        placeholder='Узнать погоду...'
        value={inputValue}
        onChange={(event: ChangeEvent<HTMLInputElement>):void => {
          return setInputValue(event.target.value)
        }}
      />
      <Button className='size-14'>
        <img src="../../public/search.svg" alt="search icon" />
      </Button>
    </form>
  )
}