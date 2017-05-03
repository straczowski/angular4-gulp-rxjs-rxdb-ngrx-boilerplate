//import 'babel-polyfill'; //only needed when you dont have polyfills
import * as RxDB from 'rxdb';


const mySchema = {
    title: "hero schema",
    version: 0,                 // <- incremental version-number
    description: "describes a simple hero",
    type: "object",
    properties: {
        name: {
            type: "string",
            primary: true       // <- this means: unique, required, string and will be used as '_id'
        },
        secret: {
            type: "string",
            encrypted: true     // <- this means that the value of this field is stored encrypted
        },
        skills: {
            type: "array",
            maxItems: 5,
            uniqueItems: true,
            item: {
                type: "object",
                properties: {
                    name: {
                        type: "string"
                    },
                    damage: {
                        type: "number"
                    }
                }
            }
        }
    },
    required: ["color"]
};

RxDB.create({
    name: 'heroesdb',
    adapter: 'websql',
    password: 'myLongAndStupidPassword', // optional
    multiInstance: true                  // default: true
  })                                                                              // create database
  .then(function(db) {return db.collection({name: 'heroes', schema: mySchema});}) // create collection
  .then(function(collection) {collection.insert({name: 'Bob'});})         

export class HeroModel {
  
}
