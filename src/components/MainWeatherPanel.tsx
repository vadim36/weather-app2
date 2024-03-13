import {FC} from 'react'
import { Button } from './UI/Button'

interface MainWeatherPanelProps {
  weatherData: IMainWeather
}

export const MainWeatherPanel:FC<MainWeatherPanelProps> = ({weatherData}) => {
  const {title, temp, icon}: IMainWeather = weatherData
  
  return (
    <section 
      aria-label='Main Weather Data Section' 
      className='bg-sky-500 text-white flex flex-col items-center'
    >
      <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="weather icon"/>
      <h1 className='font-bold text-3xl'>{temp}°C</h1>
      <h2 className='font-semibold text-xl'>{title}</h2>
      <Button>Дополнительная информация</Button>
    </section>
  )
}