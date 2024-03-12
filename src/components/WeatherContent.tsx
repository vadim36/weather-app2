import {FC} from 'react'

interface WeatherContentProps {
  weatherData: Weather[]
}

export const WeatherContent:FC<WeatherContentProps> = ({weatherData}) => {
  return (
    <div>
      {weatherData[0].main.temp}
      {weatherData[0].weather[0].main}
    </div>
  )
}