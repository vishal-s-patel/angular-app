import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getFibonacciSeries(limit: number): Observable<any> {
    return this.http.get(`${this.url}/fibonacci`, { params: { limit: limit } });
  }

  getPermutation(payload: any): Observable<any> {
    return this.http.post(`${this.url}/permutation`, payload);
  }
}
