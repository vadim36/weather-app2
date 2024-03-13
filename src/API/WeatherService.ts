const KEY: string = '719b91aa96138c35669cf96e2cb62823'

export default abstract class WeatherService {
  public static async getWeather(lat: number, lon: number):Promise<Weather[]> {
    const request: string = `http://api.openweathermap.org/data/2.5/forecast?lat=${String(lat)}&lon=${String(lon)}&appid=${KEY}`

    return fetch(request)
      .then((response: Response):Promise<WeatherResponse> => response.json())
      .then((response: WeatherResponse):Weather[] => response.list!)
  }

  public static async getLocation(town: string):Promise<TownResponse> {
    const request: string = 
      `http://api.openweathermap.org/geo/1.0/direct?q=${town}&appid=${KEY}`

    return fetch(request)
      .then((response: Response):Promise<TownResponse[]> => response.json())
      .then((response: TownResponse[]):TownResponse => response[0])
  }
}