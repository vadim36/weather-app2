interface Weather {
  dt: number,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
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
  setLocation: Dispatch<SetStateAction<string>>,
  isLocation: boolean,
  setIsLocation: Dispatch<SetStateAction<boolean>>
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