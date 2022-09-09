import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  amount = 3;
  from = 'UAH';
  to = 'USD';
  rate = 39.9;

  convert(): number{
    return this.amount * this.rate;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
