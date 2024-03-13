import {FC, useState} from 'react'
import { Header } from './components/Header'
import { LocationContext } from './context'
import { WeatherContent } from './components/WeatherContent'
import { Loader } from './components/UI/Loader'

export const App: FC = () => {
  const [location, setLocation] = useState('')
  const [isLocation, setIsLocation] = useState(false)

  return (
    <LocationContext.Provider value={{
      location, setLocation,isLocation, setIsLocation
    }}>
      <Header/>
      {!isLocation && <Loader title='Введите локацию...'/>}
      {isLocation && <WeatherContent/>}
    </LocationContext.Provider>
  )
}