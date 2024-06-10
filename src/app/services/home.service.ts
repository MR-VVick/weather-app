import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentWeather } from '../interfaces/currentWeather';

const apiUrl = environment.apiUrl
const apiKey = environment.apiKey

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private http = inject(HttpClient)

  constructor() { }

  getCurrentWeather (location: string) : Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(`${apiUrl}/current.json?q=${location}&key=${apiKey}`)
  }

  getThreeDayForecast (location: string) {
    return this.http.get(`${apiUrl}/forecast.json?q=${location}&days=4&key=${apiKey}`)
  }
}
