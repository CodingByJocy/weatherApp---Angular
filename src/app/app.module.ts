import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';
import {HttpClientModule} from '@angular/common/http'
import { ICurrentWeather } from './interfaces';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';





=======
>>>>>>> 24ceb9179479bc97d1408d9e774c81f2154bc880


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    CommonModule
   
=======
    FormsModule
>>>>>>> 24ceb9179479bc97d1408d9e774c81f2154bc880
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
