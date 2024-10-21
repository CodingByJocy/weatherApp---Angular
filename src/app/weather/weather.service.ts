import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators'
import { ICurrentWeather } from '../interfaces';

interface ICurrentWeatherData {

  weather: [{
    description: string,
    icon: string
  }],
  main: {
    feels_like: number;
    temp_kf: number;
    grnd_level: number;
    sea_level: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
    pressure: number;
    temp: number
  },
  sys:{
    country: string,
  },
  dt: number,
  name: string
  
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(city: string): Observable<ICurrentWeather> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.appId}`;
  
    return this.httpClient.get<ICurrentWeatherData>(url).pipe(
      map(data => this.transformToICurrentWeather(data))
    );
  }

  

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
   
    return {
      
      name: data.name,
      dt: data.dt*1000,
      base: data.sys.country,
    
      main: {
        temp: this.convertKelvinToCelsius(data.main.temp),
        pressure: data.main.pressure || 0,
        humidity: data.main.humidity || 0,
        temp_min: this.convertKelvinToCelsius(data.main.temp_min || 0),
        temp_max: this.convertKelvinToCelsius(data.main.temp_max || 0),
      },
      
     /*  id: data.weather[0].description */
    };
  }
  
  private convertKelvinToCelsius(kelvin: number): number {
    return (kelvin - 273.15)
  }
}