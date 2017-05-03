import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducer/counter';

import { DatabaseService } from './services/database.service';

import { AppComponent }  from './app.component';
import { TestComponent } from "./components/test/test.component";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  imports:      [ 
    BrowserModule,
    StoreModule.provideStore({ counter: counterReducer })
  ],
  declarations: [ 
    AppComponent,
    TestComponent,
    CounterComponent
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [
    DatabaseService
  ]
})
export class AppModule { }
