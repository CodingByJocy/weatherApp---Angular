import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from './weather.service';
import { NgForm } from '@angular/forms';
<<<<<<< HEAD
import { formatDate } from '@angular/common';
import {fivedayservice} from './fivedayweather.service'
import { Fivedays } from './fivedayinterface';
=======

>>>>>>> 24ceb9179479bc97d1408d9e774c81f2154bc880

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
<<<<<<< HEAD
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {

  current: ICurrentWeather | any;
  weatherData: ICurrentWeather | any;
  forecastData: Fivedays | any; 
  cityName: string = '';
  forecast: any;

  constructor(private weatherService: WeatherService, private fivedayservice: fivedayservice ) {
  }

  ngOnInit() {
    this.getCurrentWeather('Belgrade');
    this.getFiveDayForecast('Belgrade');
  }

  getCurrentWeather(city: string): void {
    this.weatherService.getCurrentWeather(city).subscribe(
      (data) => {
        this.current = data.name;
        this.weatherData = data;
      },
      (error) => {
        console.error('Error fetching current weather:', error);
      }
    );
  }

  formatDate(dtTxt: string): string {
    if (this.forecast && this.forecast.list) {
      const date = new Date(dtTxt);
      return formatDate(date, 'EEEE, MMM d, y', 'en-US');
    }
    return ''; // or any default value you prefer
  }


  getFiveDayForecast(city: string): void {
    this.fivedayservice.getFiveDayForecast(city).subscribe(
      (data) => {
        this.forecastData = data.list; // Assuming data.list is the array you want to use
        console.log(this.forecastData); // Check the console to understand the data structure
      },
      (error) => {
        console.error('Error fetching forecast:', error);
      }
    );
  }
  

  onSubmit(form: NgForm) {
    if (form.valid) {
      const city = this.cityName;
      this.getCurrentWeather(city);
      this.getFiveDayForecast(city);
=======
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
>>>>>>> 24ceb9179479bc97d1408d9e774c81f2154bc880
      form.reset();
    }
  }
}
<<<<<<< HEAD
=======

>>>>>>> 24ceb9179479bc97d1408d9e774c81f2154bc880
