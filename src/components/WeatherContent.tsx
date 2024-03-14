import {FC, useContext, useEffect, useState} from 'react'
import { LocationContext } from '../context'
import useFetching from '../hooks/useFetching'
import WeatherService from '../API/WeatherService'
import { Loader } from './UI/Loader'
import { Error } from './UI/Error'
import { MainWeatherPanel } from './MainWeatherPanel'

export const WeatherContent:FC = () => {
  const {location} = useContext(LocationContext)
  const [mainWeather, setMainWeather] = useState<IMainWeather>({
    temp: 0,
    title: '',
    icon: '01d'
  })
  const [fetchData, loadingData, loadingErrorData] = 
    useFetching(async ():Promise<void> => {      
      const {lat, lon}: TownResponse = await WeatherService.getLocation(location)
      const weatherData: Weather[] = await WeatherService.getWeather(lat, lon)
      return setMainWeather({
        temp: weatherData[0].main.temp,
        title: weatherData[0].weather[0].main,
        icon: weatherData[0].weather[0].icon
      })
    })

  useEffect(() => {
    fetchData()
  }, [location])

  return (
    <section aria-label='Weather section' className='flex flex-col flex-1'>
      {loadingData && <Loader/>}
      {loadingErrorData && <Error message={loadingErrorData}/>}
      {fetchData && !loadingErrorData && !loadingData 
        && <>
          <MainWeatherPanel weatherData={mainWeather}/>
        </>
      }
    </section>
  )
}