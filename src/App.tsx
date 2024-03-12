import {FC, useState} from 'react'
import { Header } from './components/Header'
import { LocationContext } from './context'
import WeatherService from './API/WeatherService'
import useFetching from './hooks/useFetching'
import { WeatherContent } from './components/WeatherContent'

export const App: FC = () => {
  const [location, setLocation] = useState<string>('')
  const [weather, setWeather] = useState<any>()
  const [fetchWeather, isWeatherLoading, weatherLoadingError] = useFetching(async () => {
    const {lat, lon}: TownResponse = await WeatherService.getLocation(location)
    const weatherData: Weather[] = await WeatherService.getWeather(lat, lon)
    return setWeather(weatherData)
  })

  

  return (
    <>
      <LocationContext.Provider value={{
        location, setLocation
      }}>
        <Header/>
        {!weather && !location && 
          <h1 className='heading'>Введите локацию...</h1>}
        {isWeatherLoading && <h1 className='heading'>Загрузка...</h1>}
        {weatherLoadingError && <h1 className='heading'>Ошибка {weatherLoadingError}</h1>}
        {weather && location && <WeatherContent weatherData={weather}/>}
      </LocationContext.Provider>
    </>
  )
}