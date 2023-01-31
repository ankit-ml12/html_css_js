console.log(Math.sqrt(25)); // 2
console.log(5 ** 2); // 25
console.log(5 ** 5); // 3125
console.log(9 ** (1 / 2)); // 3
console.log(27 ** (1 / 3)); // 3

//max operation

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, "23", 11, 2)); //23
console.log(Math.max(5, 18, "23px", 11, 2)); //Nan
//same for min operation
console.log(Math.PI);
3.1415;

const random = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(random(10, 20)); //random vaue between 10 and 20

//trunk, round, ceil floor (all this four function return integer)

//truck :- remove everything after decimal
console.log(Math.trunc(24.3)); //24
console.log(Math.trunc(24.8)); //24

//round :- give the nearest interger value of that number
console.log(Math.round(24.3)); //24
console.log(Math.round(24.8)); //25

//ceil give the next greatest integer
console.log(Math.ceil(24.3)); //25
console.log(Math.ceil(24.8)); //25
console.log(Math.ceil("24.8")); //25
//floor give next smallest interger
console.log(Math.floor(24.3)); //24
console.log(Math.floor(24.8)); //24

// toFIxed := return string

let ml = 45.241578;
console.log(ml.toFixed(1)); //45.2
console.log(ml.toFixed(2)); //45.24
console.log(ml.toFixed(3)); //45.241
console.log(ml.toFixed(4)); //45.2416

//but to get integer in return simply put + or Number in from of ml
console.log(+ml.toFixed(2)); //45.24 number
