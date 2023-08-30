import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h1>{{title}}</h1>
              <hr>
              <h3>{{counter}}</h3>
              <button (click)="increaseBy(+1)">+</button>
              <button (click)="resetCounter()">Reset</button>
              <button (click)="increaseBy(-1)">-</button>
            `

})

export class CounterComponent {

  constructor() { }

  public title: string = 'Counter App';
  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }

}