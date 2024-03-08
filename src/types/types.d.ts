interface TownResponse {
  country: string,
  lat: number,
  lon: number,
  local_names: {[key: string]: string},
  name: string,
  state: string,
}
interface WeatherCoordinates {
  id: number,
  country: string,
  name: string,
  coords: {
    lat: number,
    lon: number
  },
  population: string,
  timezone: number
  sunrise: number,
  sunset: number
}
interface Coordinates {
  lat: number,
  lon: number
}
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
interface WeatherResponse {
  cod: string,
  message: string | number,
  cnt: number,
  list: Weather[],
  city: TownResponse
}
type useFetchingReturn = [
  Function, boolean, null | string
]