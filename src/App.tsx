import {FC, useEffect, useState} from 'react'
import WeatherService from './API/WeatherService'
import { useFetching } from './hooks/useFetching'
import { WeatherData } from './components/WeatherData'
import { Header } from './components/Header'

export const App: FC = () => {
  const [weather, setWeather] = useState<WeatherResponse>()
  const [location, setLocation] = useState<string>('')
  const [fetchWeather, weatherLoading, weatherLoadingError] = useFetching(async () => {
    const {lat, lon}: TownResponse = await WeatherService.getLocation(location ?? 'Moscow')
    const coordinates: Coordinates = {
      lat, lon
    }
    const weatherData:WeatherResponse = await WeatherService.getAll(coordinates)
    return setWeather(weatherData)
  })

  useEffect(() => {
    fetchWeather()
  }, [location])
  
  async function getLocation(location: string):Promise<void> {
    const {name} = await WeatherService.getLocation(location)
    return setLocation(name)
  }

  return (
    <>
      <main>
        <Header getLocation={getLocation}/>
        {weatherLoading && <h1>Loading...</h1>}
        {weatherLoadingError && <h1 className='font-semibold text-2xl p-2'>
            Error {weatherLoadingError} </h1>}
        {weather && <WeatherData weatherData={weather}/>}
      </main>
    </>
  )
}