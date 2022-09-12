import { Component, OnInit } from '@angular/core';
import {ExchangeRatesService} from '../services/exchange-rates.service'
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  amount = 1;
  from = 'UAH';
  to = 'USD';
  rates!: {[key: string]: number };
  
  convert(): number{
    let result = 1;
    if (this.rates) {
    return result = this.amount * this.rates[this.to];
    };
    return result
  }
  loadRates(){
    this.service.getRates(this.from).subscribe(res => this.rates = res.rates)
  }
  getAllCurrencies(): string[]{
    return Object.keys(this.rates);
  }
  getUsd(): number{
    if (this.rates) {
     return this.rates['USD'] * this.amount;
    }
    return 0;
  }
  getEur(): number{
    if (this.rates) {
     return this.rates['EUR'] * this.amount;
    }
    return 0;
  }
  getGbp(): number{
    if (this.rates) {
     return this.rates['GBP'] * this.amount;
    }
    return 0;
  }
  constructor(private service: ExchangeRatesService) {
   
   }

  ngOnInit(): void {
    this.loadRates();
  }

}
