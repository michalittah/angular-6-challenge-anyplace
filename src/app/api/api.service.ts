import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  public getHotelsData(): Observable<any> {
    return this.http.get('/assets/hotels-data.json', {responseType: 'json'});
  }
}
