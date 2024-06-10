 export interface ForecastWeather {
    forecastday: Forecastday[]
}
  
export interface Forecastday {
    date: string
    date_epoch: number
    day: Day
}
  
export interface Day {
    maxtemp_c: number
    mintemp_c: number
    daily_chance_of_rain: number
    maxwind_kph: number
    condition: Condition
    uv: number
}

export interface Condition {
    text: string
    icon: string
    code: number
}