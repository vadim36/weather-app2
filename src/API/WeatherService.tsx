const KEY: string = '40dd0d9fca4d02c5fa33d8b285cdeb4f'

export default abstract class WeatherService {
  public static async getWeather(lat: number, lon: number):Promise<Weather[] | void> {
    const request: string = 
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY}`
  
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