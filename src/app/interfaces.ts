export interface ICurrentWeather {
  /*coord: Coord*/
<<<<<<< HEAD
  /*weather: Weather*/
=======
 /* weather: Weather[]*/
>>>>>>> 24ceb9179479bc97d1408d9e774c81f2154bc880
  base: string
  main: Main
  /*visibility: number
  wind: Wind
  clouds: Clouds*/
  dt: number
 /* sys: Sys*/
  /*id: number*/
  name: string
  /*cod: number*/
}

export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  pressure: number
  humidity: number
  temp_min: number
  temp_max: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  message: number
  country: string
  sunrise: number
  sunset: number
}
<<<<<<< HEAD

=======
>>>>>>> 24ceb9179479bc97d1408d9e774c81f2154bc880
