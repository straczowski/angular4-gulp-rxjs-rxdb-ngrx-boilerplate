import { Injectable } from '@angular/core';
//import * as RxDB from 'rxdb';

const mySchema = {
    "title": "hero schema",
    "description": "describes a simple hero",
    "version": 0,
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "primary": true
        }
    }
};


    /*RxDB.create({
        name: 'mydb',
        adapter: 'websql'
    })                                                                              // create database
    .then(function(db) {
        return db.collection({name: 'counters', schema: mySchema});
    }) // create collection
    .then(function(collection) {
        collection.insert({user: 'Bob', counter: 3});
    })  */

@Injectable()
export class DatabaseService {
  db: any;

  constructor() {    
  }

}