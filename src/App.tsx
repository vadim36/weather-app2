import {FC, useState} from 'react'
import { Header } from './components/Header'
import { LocationContext } from './context'

export const App: FC = () => {
  const [location, setLocation] = useState<string>('')
  
  return (
    <>
      <LocationContext.Provider value={{
        location, setLocation
      }}>
        <Header/>
      </LocationContext.Provider>
    </>
  )
}