import {FC, useContext, useEffect, useState, useRef} from 'react'
import { LocationContext } from '../context'
import useFetching from '../hooks/useFetching'
import WeatherService from '../API/WeatherService'
import { Loader } from './UI/Loader'
import { Alert } from './UI/Alert'
import { MainWeatherPanel } from './MainWeatherPanel'
import { ExtraWeather } from './ExtraWeather'
import { DayInfo } from './DayInfo'

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
  const [dayInfo, setDayInfo] = useState<IDayInfo>({
    sunrise: '0',
    sunset: '0'
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
      setExtraWeather({
        temp: {...extraWeather.temp, value: weatherData.main.temp},
        feels_like: {...extraWeather.feels_like, value: weatherData.main.feels_like},
        temp_min: {...extraWeather.temp_min, value: weatherData.main.temp_min},
        temp_max: {...extraWeather.temp_max, value: weatherData.main.temp_max},
        pressure: {...extraWeather.pressure, value: weatherData.main.pressure},
        humidity: {...extraWeather.humidity, value: weatherData.main.humidity}
      })
      
      const sunrise: Date = new Date(weatherData.sys.sunrise * 1000)
      const sunset: Date = new Date(weatherData.sys.sunset * 1000)

      return setDayInfo({
        sunrise: sunrise.toLocaleString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit'
        }),
        sunset: sunset.toLocaleString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit'
        })
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
      {loadingErrorData && <div className='p-2'>
        <Alert body={loadingErrorData} variant='danger'/>
      </div>}
      {fetchData && !loadingErrorData && !loadingData 
        && <>
          <MainWeatherPanel weatherData={mainWeather} toggleModal={toggleModal}/>
          <ExtraWeather 
            weatherData={extraWeather}
            toggleModal={toggleModal}
            modalRef={$extraInfoModal}  
          />
          <DayInfo
            info={dayInfo}
          />
        </>
      }
    </section>
  )
}