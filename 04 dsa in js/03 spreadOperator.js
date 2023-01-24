const arr = [7, 8, 9];
const bigArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(bigArr); //[ 1, 2, 7, 8, 9 ]

// but we can dp easily like this
const newArr = [1, 2, ...arr];
console.log(newArr); //[ 1, 2, 7, 8, 9 ]
console.log(...newArr); //1 2 7 8 9

const secArr = [...newArr, 4, 5];
console.log(secArr); //[1, 2, 7, 8, 9, 4, 5]

//two use case of spread operator

//copy the arr
const arr4 = [1, 4, 7, 5, 6];
const copyArr = [...arr4];
console.log(copyArr); // copy or arr4

//merge two arr
const arrMerge = [...arr, ...arr4];
console.log(arrMerge); //[ 7, 8, 9, 1,  4, 7, 5, 6 ]

// we can use spread operator on all iteratable thing accept
//ex; array, string, map ,set but not object
let temp = "ankit";
const temp2 = [...temp, " ", "patidar"];
console.log(temp2); //[ 'a', 'n', 'k', 'i', 't', ' ', 'patidar' ]

const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable

//we can also use this object like this
const obj4 = { ...obj, key: "value" };
const array4 = [1, 2, 3];
const obj7 = { ...array4 }; // { 0: 1, 1: 2, 2: 3 }
//it will assign arr with their place key

//we can only use spread array when building an array or pass value in function
// console.log(`${...temp} hello`); give error

//test some function
function hello(a, b, c) {
  console.log(`${a} ${b} ${c}`);
  console.log(`sum is ${a + b + c}`);
}
let value = [10, 20, 30];

hello(...value); // this how we can pass argument
