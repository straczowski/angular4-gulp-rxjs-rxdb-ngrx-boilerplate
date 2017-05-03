import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello Mama mia {{name}} </h1>
    <test></test>
    <counter></counter>
  `,
})
export class AppComponent  { 
  name = 'Angular'; 

  constructor() {
    console.log("con");
    let a = "es6 babe";
    console.log(a);
  }
}