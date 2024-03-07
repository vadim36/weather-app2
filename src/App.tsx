import {FC, useEffect, useState} from 'react'
import WeatherService from './API/WeatherService'
import { useFetching } from './hooks/useFetching'

export const App: FC = () => {
  const [weather, setWeather] = useState<WeatherResponse>()
  const [fetchWeather, weatherLoading, weatherLoadingError] = useFetching(async () => {
    const {lat, lon}: TownResponse = await WeatherService
    .getLocation('Moscow')
   const coordinates: Coordinates = {
     lat, lon
   }
   const weatherData:WeatherResponse = await WeatherService
     .getAll(coordinates)
   return setWeather(weatherData)
  })

  useEffect(() => {
    fetchWeather()
  }, [])
  
  return (
    <>
      {weatherLoading && <h1>Loading...</h1>}
      {weatherLoadingError && <h1>Error {weatherLoadingError}</h1>}
      {!weatherLoading && !weatherLoadingError
        && String(weather?.cod)}
    </>
  )
}