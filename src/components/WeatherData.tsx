import {FC, useState, useRef} from 'react'
import { Button } from '../UI/Button'
import { Modal } from '../UI/Modal'

interface WeatherDataProps {
  weatherData: WeatherResponse
}

export const WeatherData:FC<WeatherDataProps> = ({weatherData}) => {
  const weatherList: Weather[] = [...weatherData.list]
  const date: Date = new Date(weatherList[0].dt_txt)
  const [weather, setWeather] = useState({
    date: date.toLocaleString('ru-RU', {
      month: 'long',
      day: 'numeric'
    }),
    title: weatherList[0].weather[0].main,
    temp: Math.ceil(weatherList[0].main.temp / 33.8),
    icon: weatherList[0].weather[0].icon
  })
  const [extraWeather, setExtraWeather] = useState({
    feels_like: weatherList[0].main.feels_like,
    temp_min: weatherList[0].main.temp_min,
    temp_max: weatherList[0].main.temp_max,
    pressure: weatherList[0].main.pressure,
    sea_level: weatherList[0].main.sea_level,
    humidity: weatherList[0].main.humidity,
  })
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const $modal = useRef<HTMLDialogElement | null>(null)

  function toggleModal():void {
    if (isShowModal) {
      $modal.current!.close()
      return setIsShowModal(false)
    }
    $modal.current!.showModal()
    return setIsShowModal(true)
  }

  return (
    <section aria-label="main weather content" className='flex flex-col h-dvh'>
      <section aria-label='weather header content' className='text-2xl 
      text-center bg-yellow-300'>
        {/*TODO:Сделать адаптивный цвет*/}
        {weather.date}
      </section>
      <section aria-label='main content' className='bg-sky-500 text-white flex-1
        flex flex-col items-center'
      >
        <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} 
          alt="weather icon" className='size-56'/>
        <h2 className='font-semibold text-7xl p-2'>{weather.temp} ºC</h2>
        <h1 className='font-bold text-3xl m-2'>{weather.title}</h1>
        <Button className='m-3' onClick={toggleModal}>Show more info</Button>
      </section>
      <Modal ref={$modal} toggleModal={toggleModal}>
123
      </Modal>
    </section>
  )
}