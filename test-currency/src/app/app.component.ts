import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-currency';
  clickCounter = 0;

  incrementCounter(){
    this.clickCounter+=1;
  }
}
