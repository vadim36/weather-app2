import {FC, useState} from 'react'
import { Header } from './components/Header'
import { LocationContext } from './context'

export const App: FC = () => {
  const [location, setLocation] = useState('')
  const [isLocation, setIsLocation] = useState(false)

  //1. Логика заполнения location в отдельный компонент(Header)
  //2. Логика загрузки данных в компоненте WeatherContent
  //3. Рендеринг WeatherContent условно location

  return (
    <LocationContext.Provider value={{
      location, setLocation,isLocation, setIsLocation
    }}>
      <Header/>
      {!isLocation && <h1>Введите локацию...</h1>}  
      {isLocation && <div>Content {location}</div>}
    </LocationContext.Provider>
  )
}