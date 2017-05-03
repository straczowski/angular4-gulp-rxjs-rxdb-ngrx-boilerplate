//import 'babel-polyfill'; //only needed when you dont have polyfills
import * as RxDB from 'rxdb';


const mySchema = {
    title: "counter schema",
    version: 0,                 // <- incremental version-number
    description: "saves number of counter",
    type: "object",
    properties: {
        counter: {
            type: "number"
        },
        user: {
            type: "string",
            primary: true       // <- this means: unique, required, string and will be used as '_id'  
        }
    }
};

RxDB.create({
    name: 'mydb',
    adapter: 'websql'
})                                                                              // create database
.then(function(db) {
    return db.collection({name: 'counters', schema: mySchema});
}) // create collection
.then(function(collection) {
    collection.insert({user: 'Bob', counter: 3});
})         

export class CounterModel {
  
}
