import {FC, useEffect, useState} from 'react'
import { Header } from './components/Header'
import { LocationContext } from './context'
import WeatherService from './API/WeatherService'
import useFetching from './hooks/useFetching'

export const App: FC = () => {
  const [location, setLocation] = useState<string>('')
  const [fetchLocation, isLocationLoading, locationLoadingError] = useFetching(async () => {
    const {lat, lon}: TownResponse = await WeatherService.getLocation(location)
    return { lat, lon }
  })

  useEffect(() => {
    fetchLocation()
  }, [location])

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