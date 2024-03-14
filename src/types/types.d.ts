interface Weather {
  dt: number,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  },
  weather: {
    id: number,
    main: string,
    description: string,
    icon: string
  }[],
  clouds: { all: number },
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  visibility: number
  pop: number,
  rain: { '3h': number },
  sys: { pod: number },
  dt_txt: string
}

interface TownResponse {
  country: string,
  lat: number,
  lon: number,
  local_names: {[key: string]: string},
  name: string,
  state: string,
}

interface WeatherResponse {
  cod: string,
  message: string | number,
  cnt: number,
  list?: Weather[],
  city?: TownResponse
}

interface ILocationContext {
  location: string,
  setLocation: Dispatch<SetStateAction<string>>
}

type TUseFetching = [
  fetching: Function,
  isLoading: boolean,
  error: string
]

interface IMainWeather {
  title: string,
  temp: number,
  icon: string
}

interface IExtraWeatherValue {
  title: string,
  value: number
}

interface IExtraWeather {
  temp: IExtraWeatherValue,
  feels_like: IExtraWeatherValue,
  temp_min: IExtraWeatherValue,
  temp_max: IExtraWeatherValue,
  pressure: IExtraWeatherValue,
  humidity: IExtraWeatherValue
}

interface CurrentWeather extends Weather {
  coords: {
    lon: number,
    lat: number
  },
  base: string,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

interface IDayInfo {
  sunrise: string,
  sunset: string
}