const obj = {
  namee: "ankit",
  age: 22,
  number: 9907799970,
  school: "vsschool",
};

//do destructure obj we need to use the exect name of the property, here order of element is not metter
const { namee, age, school } = obj;

console.log(namee, age, school);
//ankit 22 vsschool

//if you want specific name use can use like this
const { namee: ofml, age: umar, school: vidyalaya } = obj;
console.log(ofml, umar, vidyalaya);
//ankit 22 vsschool

// we can also put default value similar to array.
const { menu: ankit = [], startmenu: arr2 = [] } = obj;
console.log(ankit, arr2); //[] []

//mutating variable
let a = 100;
let b = 500;
const obj2 = { a: 10, b: 50, c: 60 };
// {
//   a, b
// } = obj2  //it give error
// so you need to write like this

({ a, b } = obj2); //it word dude.
console.log(a, b); //10 50
