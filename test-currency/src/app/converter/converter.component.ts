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
    return result = this.amount === null?1:this.amount * this.rates[this.to];
    };
    return result
  }
  loadRates(){
    this.service.getRates(this.from).subscribe(res => this.rates = res.rates)
  }
  
  constructor(private service: ExchangeRatesService) {
    console.log( this.rates)
    console.log( this.amount)
   }

  ngOnInit(): void {
    this.loadRates();
  }

}
