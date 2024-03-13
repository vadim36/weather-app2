import {FC, useContext, useEffect, useState} from 'react'
import { LocationContext } from '../context'
import useFetching from '../hooks/useFetching'
import WeatherService from '../API/WeatherService'
import { Loader } from './UI/Loader'
import { Error } from './UI/Error'

export const WeatherContent:FC = () => {
  const {location} = useContext(LocationContext)
  const [weather, setWeather] = useState({
    temp: 0
  })
  const [fetchData, loadingData, loadingErrorData] = 
    useFetching(async ():Promise<void> => {
      const {lat, lon}: TownResponse = await WeatherService.getLocation(location)
      const weatherData: Weather[] = await WeatherService.getWeather(lat, lon)
      return setWeather({...weather, temp: weatherData[0].main.temp})
    })

  useEffect(() => {
    fetchData()
  }, [location])

  return (
    <section aria-label='Weather section'>
      {loadingData && <Loader/>}
      {loadingErrorData && <Error message={loadingErrorData}/>}
      {fetchData && !loadingErrorData && !loadingData 
        && `Content ${weather.temp}`}
    </section>
  )
}