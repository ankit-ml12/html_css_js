//read this section once more with implementation

let ans = 0.1 + 0.2;
console.log(ans); //0.30000000000000004
console.log(0.1 + 0.2 == 0.3); //false
console.log(3 === 3.0); //true

// to convert any string into number we have this method
let num = "23";
console.log(num); //23 string
console.log(Number(num)); //23 number
console.log(+num); //23 number

//parsing
console.log(Number.parseInt("30.24")); //30 number
console.log(Number.parseInt("30.14px")); //30 number
console.log(Number.parseInt("e30")); //Nan
// it also accept regex so we pass  10 as second argument so we will not find any unnecessary difficulty

console.log(Number.parseInt("30.24", 10)); //30 number
console.log(Number.parseInt("30.14px", 10)); //30 number
console.log(Number.parseInt("e30", 10)); //Nan

//parseFloat // don't pass 10
console.log(Number.parseFloat("30.24")); //30.24 number
console.log(Number.parseFloat("30.14px")); //30.14 number
console.log(Number.parseFloat("e30")); //Nan

//isNan to check it is number of not
console.log(Number.isNaN("30.24")); //30.24 number
console.log(Number.isNaN(30)); //Nan
console.log(Number.isNaN(+"ss")); //true
console.log(Number.isNaN(23 / 0)); //false

//it is difficult
//so best way to check it is number of not is isfinite
console.log("=============================");
console.log(Number.isFinite("30.24")); //false
console.log(Number.isFinite(30)); //true
console.log(Number.isFinite(30.5)); //true
console.log(Number.isFinite(+"ss")); //false
console.log(Number.isFinite(23 / 0)); //false

// to check for interger use isInteger
console.log("=============222222222============");
console.log(Number.isInteger("30.24")); //false
console.log(Number.isInteger(30)); //true
console.log(Number.isInteger(30.5)); //true
console.log(Number.isInteger(+"ss")); //false
console.log(Number.isInteger(23 / 0)); //false
