import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient) { }

  getLocationByIP(): Observable<any> {
    // Assuming you have an IP geolocation API endpoint
    const apiUrl = 'http://ip-api.com/json/';
    return this.http.get(apiUrl);
  }
}