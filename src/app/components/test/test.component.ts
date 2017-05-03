import { Component } from '@angular/core';
import { DatabaseService } from "../../services/database.service";

@Component({
  selector: 'test',
  template: require("./test.html!text")
})
export class TestComponent  { 

  constructor(
        private databaseService: DatabaseService
    ) { }
}