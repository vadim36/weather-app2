import {FC, useState} from 'react'

interface WeatherDataProps {
  weatherData: WeatherResponse
}

export const WeatherData:FC<WeatherDataProps> = ({weatherData}) => {
  const weatherList: Weather[] = weatherData.list
  const [weather, setWeather] = useState({
    date: weatherList[0].dt_txt,
    title: weatherList[0].weather[0].main,
    body: weatherList[0].weather[0].description,
    temp: weatherList[0].main.temp
  })

  return (
    <div>
      {weather.date}
      {weather.temp} {weather.title};
      {weather.body}
    </div>
  )
}