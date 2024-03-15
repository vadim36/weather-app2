import {FC, useState} from 'react'
import { Header } from './components/Header'
import { LocationContext } from './context'
import { WeatherContent } from './components/WeatherContent'
import { BrowserRouter } from 'react-router-dom'
import { Aside } from './components/Aside'

export const App: FC = () => {
  const [location, setLocation] = useState<string>('London')
  const [isAsideShow, setIsAsideShow] = useState<boolean>(false)

  function toggleAside():void {
    return setIsAsideShow((prev: boolean):boolean => !prev)
  }

  return (
    <BrowserRouter>
      <div id='App' className='h-dvh flex flex-col'>
        <LocationContext.Provider value={{
          location, setLocation,
        }}>
          <Header toggleAside={toggleAside}/>
          <WeatherContent/>
          <Aside isShow={isAsideShow}/>
        </LocationContext.Provider>
      </div>
    </BrowserRouter>
  )
}