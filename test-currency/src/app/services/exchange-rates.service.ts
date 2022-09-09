import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor(private httpClient: HttpClient) { }

  getRates() {
    return this.httpClient.get( 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
  }
}
