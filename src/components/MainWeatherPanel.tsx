import {FC, useContext} from 'react'
import { Button } from './UI/Button'
import { Alert } from './UI/Alert'
import { LocationContext } from '../context'

interface MainWeatherPanelProps {
  weatherData: IMainWeather,
  toggleModal: () => void
}

export const MainWeatherPanel:FC<MainWeatherPanelProps> = (props) => {
  const {title, temp, icon}: IMainWeather = props.weatherData
  const {location} = useContext(LocationContext)

  return (
    <section 
      aria-label='Main Weather Data Section' 
      className='bg-sky-500 text-white flex flex-col items-center flex-1 gap-2 p-2'
    >
      <Alert body={`Current location - ${location}`}/>
      <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="weather icon"/>
      <h1 className='font-bold text-3xl'>{temp}°C</h1>
      <h2 className='font-semibold text-xl'>{title}</h2>
      <Button onClick={props.toggleModal}>Extra information</Button>
    </section>
  )
}