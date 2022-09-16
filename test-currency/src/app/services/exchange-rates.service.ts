import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ExchangeRatesResponse} from './payloads/exchange-rates-response';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {
  
  constructor(private httpClient: HttpClient) {
  
   }
   
  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>( `https://api.apilayer.com/exchangerates_data/latest?base=${base}`, {headers: new HttpHeaders().set("apikey", "7ywZ8M1yTKci5yjXkhObOX8KriMg9Qhv")})
  }
}
