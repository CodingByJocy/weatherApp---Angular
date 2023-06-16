import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  current: ICurrentWeather | any;
  weatherData: ICurrentWeather | any; 

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getCurrentWeather('Belgrade')
      .subscribe((data) => {
        this.current = data;
        this.weatherData = data; // Assign the received data to the weatherData property
      });
  }
}
