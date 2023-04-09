'use strict'
const Person = function (firstname, birthYear) {
  this.firstname = firstname
  this.birthYear = birthYear

  //never do this because it will attach to every object
  //this.calAge = function (){
  //   console.log(2037-this.birthYear);
  // }
}

// the only diff between constructor and normal function is we call constructor function by new keyword

const ankit = new Person('ankit', 1999)
const temp = new Person('temp', 1990)
console.log(ankit)
// Person { firstname: 'ankit', birthYear: 1999 }

//1. new {} is created
//2. function is called this={}
//3. {} linked to prototype
//4. function automatically return {}

// here ankit is instance of person class

//we can check using this method
console.log(ankit instanceof Person)
//true
