import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../../reducer/counter';

interface AppState {
  counter: number;
}


@Component({
  selector: 'counter',
  template: `
  <div>
    <button (click)="increment()">Increment</button>
    <div>Current Count: {{ counter | async }}</div>
    <button (click)="decrement()">Decrement</button>

    <button (click)="reset()">Reset Counter</button>
  </div>
  `
})
export class CounterComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppState>){
    this.counter = store.select('counter');
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }
}