import {FC, useState} from 'react'
import { Header } from './components/Header'
import { LocationContext } from './context'
import { WeatherContent } from './components/WeatherContent'

export const App: FC = () => {
  const [location, setLocation] = useState('London')

  return (
    <div id='App' className='h-dvh flex flex-col'>
      <LocationContext.Provider value={{
        location, setLocation,
      }}>
        <Header/>
        <WeatherContent/>
      </LocationContext.Provider>
    </div>
  )
}