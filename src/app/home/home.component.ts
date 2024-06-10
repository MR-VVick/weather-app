import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeService } from '../services/home.service';
import { CurrentWeather } from '../interfaces/currentWeather';
import { CommonModule } from '@angular/common';
import { ForecastWeather } from '../interfaces/forecastWeather';
import { DateHelperService } from '../services/date-helper.service';
import { FormsModule } from '@angular/forms';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    MatIconModule, 
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private homeService = inject(HomeService)
  private dateHelperService = inject(DateHelperService)
  currentWeather: CurrentWeather | null = null
  forecastWeather: ForecastWeather| null = null
  searchInputValue: string = '';

  constructor(private geolocationService: GeolocationService) {}
  
  ngOnInit(): void {
    this.getLocation();
  }

  onInputChange() {
    if (!this.searchInputValue.trim()) {
      this.getLocation();
    } else {
      this.loadData(this.searchInputValue);
      this.loadForecastData(this.searchInputValue);
    }
  }

  getLocation(): void {
    this.geolocationService.getLocationByIP()
      .subscribe((location: any) => {
        const locationString = location.city;
        this.loadData(locationString);
        this.loadForecastData(locationString);
      });
  }

  loadData(location: string){
    this.homeService.getCurrentWeather(location).subscribe({
      next: (res: any) => {
        this.currentWeather = res as CurrentWeather;
      },
      error: (error) => console.log('Error fetching data', error)
    })
  }

  loadForecastData(location: string){
    this.homeService.getThreeDayForecast(location).subscribe({
      next: (res: any) => {
        this.forecastWeather = res.forecast as ForecastWeather;
      },
      error: (error) => console.log('Error fetching data', error)
    })
  }

  formatDate(dateString: string): string {
    return this.dateHelperService.formatDate(dateString);
  }

  formatDay(dateString: string): string {
    return this.dateHelperService.formatDay(dateString);
  }

  formatShortDate(dateString: string): string {
    return this.dateHelperService.formatShortDate(dateString);
  }
}
