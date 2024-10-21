
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators'
import { Fivedays, List } from './fivedayinterface';
import { Weather } from '../interfaces';

interface fivedayinterfaceData {
  list: List;
    sys: any;
    weather: [{
      description: string;
      icon: string;
    }];
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
      city:{
        country: string,
      },
      dt: number,
      name: string,
    
}

@Injectable({
    providedIn: 'root'
  })

  export class fivedayservice {
    constructor(private httpClient: HttpClient) {}
 

getFiveDayForecast(city: string): Observable<Fivedays> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${environment.fourappId}&units=metric`;
    console.log(url)

    return this.httpClient.get<fivedayinterfaceData>(url).pipe(
      map(data => this.transformToFivedays(data))

    );
  }


  private transformToFivedays(data: fivedayinterfaceData): Fivedays {
   
    return {
      
      name: data.name,
      dt: data.dt*1000,
      base: data.city.country,
      list: data.list,
      
          
      main: {
          temp: this.convertTemptoCelsius(data.main?.temp),
          pressure: data.main?.pressure || 0,
          humidity: data.main?.humidity || 0,
          temp_min: this.convertTemptoCelsius(data.main?.temp_min ),
          temp_max: this.convertTemptoCelsius(data.main?.temp_max ),
          feels_like: 0,
          sea_level: 0,
          grnd_level: 0,
          temp_kf: 0
      },
      
    };
  }
  
  private convertTemptoCelsius(kelvin: number): number {
    console.log(kelvin)
    return (kelvin - 273.15);
  
}



}
