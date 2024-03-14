import {FC, useContext, useEffect, useState, useRef} from 'react'
import { LocationContext } from '../context'
import useFetching from '../hooks/useFetching'
import WeatherService from '../API/WeatherService'
import { Loader } from './UI/Loader'
import { Error } from './UI/Error'
import { MainWeatherPanel } from './MainWeatherPanel'
import { ExtraWeather } from './ExtraWeather'

export const WeatherContent:FC = () => {
  const {location} = useContext(LocationContext)
  const [mainWeather, setMainWeather] = useState<IMainWeather>({
    temp: 0,
    title: '',
    icon: '01d'
  })
  const [extraWeather, setExtraWeather] = useState<IExtraWeather>({
    temp: {title: 'Temperature', value: 0},
    feels_like: {title: 'Feels Like', value: 0},
    temp_min: {title: 'Min Temp', value: 0},
    temp_max: {title: 'Max Temp', value: 0},
    pressure: {title: 'Pressure', value: 0},
    humidity: {title: 'Humidity', value: 0}
  })
  const [fetchData, loadingData, loadingErrorData] = 
    useFetching(async ():Promise<void> => {      
      const {lat, lon}: TownResponse = await WeatherService.getLocation(location)
      const weatherData: CurrentWeather = await WeatherService.getCurrentWeather(lat, lon)
      setMainWeather({
        temp: weatherData.main.temp,
        title: weatherData.weather[0].main,
        icon: weatherData.weather[0].icon
      })
      return setExtraWeather({
        temp: {...extraWeather.temp, value: weatherData.main.temp},
        feels_like: {...extraWeather.feels_like, value: weatherData.main.feels_like},
        temp_min: {...extraWeather.temp_min, value: weatherData.main.temp_min},
        temp_max: {...extraWeather.temp_max, value: weatherData.main.temp_max},
        pressure: {...extraWeather.pressure, value: weatherData.main.pressure},
        humidity: {...extraWeather.humidity, value: weatherData.main.humidity}
      })
    })
  const $extraInfoModal = useRef<HTMLDialogElement | null>(null)
  const [isShowExtraInfoModal, setIsShowExtraInfoModal] = useState<boolean>(false)

  function toggleModal():void {
    if (isShowExtraInfoModal) {
      $extraInfoModal.current?.close()
      return setIsShowExtraInfoModal(false)
    }

    $extraInfoModal.current?.showModal()
    return setIsShowExtraInfoModal(true)
  }

  useEffect(() => {
    fetchData()
  }, [location])

  return (
    <section aria-label='Weather section' className='flex flex-col flex-1'>
      {loadingData && <Loader/>}
      {loadingErrorData && <Error message={loadingErrorData}/>}
      {fetchData && !loadingErrorData && !loadingData 
        && <>
          <MainWeatherPanel weatherData={mainWeather} toggleModal={toggleModal}/>
          <ExtraWeather 
            weatherData={extraWeather}
            toggleModal={toggleModal}
            modalRef={$extraInfoModal}  
          />
        </>
      }
    </section>
  )
}