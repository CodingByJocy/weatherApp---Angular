import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from './weather.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  current: ICurrentWeather | any;
  weatherData: ICurrentWeather | any;
  cityName: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getCurrentWeather('Belgrade')
      .subscribe((data) => {
        this.current = data.name;
        this.weatherData = data;
      });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const city = this.cityName;
      this.weatherService.getCurrentWeather(city)
        .subscribe((data) => {
          this.current = data.name;
          this.weatherData = data;
        });
      form.reset();
    }
  }
}

