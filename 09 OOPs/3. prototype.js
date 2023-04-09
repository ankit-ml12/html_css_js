'use strict'
const Person = function (firstname, birthYear) {
  this.firstname = firstname
  this.birthYear = birthYear
}

const ankit = new Person('ankit', 1999)
const temp = new Person('temp', 1990)

//so if we want to attach any method with class we use prototype so it will not attach with every obj

Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear)
}
ankit.calAge() //38
temp.calAge() //47
console.log(ankit)
console.log(Person.prototype)
//Person { firstname: 'ankit', birthYear: 1999 }
// { calAge: [Function (anonymous)] }

console.log(ankit.__proto__)
// /{ calAge: [Function (anonymous)] }

console.log(ankit.__proto__ === Person.prototype)
//true
//to check proototype with method we use in this way

console.log(Person.prototype.isPrototypeOf(ankit))
//true

//prototype is allways prototype of the object not of the class or function which created is

//this is how it works with function constructors and ES6 classes
//not with the object.crate syntex

// prototype chaining
//every object or function try to find prototype in their constructor or parent
//if not found then they will check in grandparent
