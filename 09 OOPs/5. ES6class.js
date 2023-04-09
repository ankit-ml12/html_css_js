//class expression
//const PersonCl = class{}

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }

  //methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear)
  }
}

const ankit = new PersonCl('ankit', 2005)
console.log(ankit)
// PersonCl { firstName: 'ankit', birthYear: 2005 }
ankit.calcAge() //32

console.log(ankit.__proto__ === PersonCl.prototype)
//true

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`)
}
ankit.greet() //hey ankit

//1 classes are not hoisted
//2. class are first -class citizen
//3. classes are executed in strict mode even you not decleared

//instance method
PersonCl.hey = function () {
  console.log('HEY THERE 👋')
}

//static method
PersonCl.wait = function () {
  console.log('HEY THERE 👋')
}

//wait method is only attach with PersonCl you can not call it using instances of PersonCl
