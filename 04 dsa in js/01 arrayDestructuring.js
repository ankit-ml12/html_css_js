const arr = [10, 20, 30, 40, 50, 60];
//one way
const a = arr[0];
const b = arr[1];
const c = arr[2];

//this is called destructuring of arr
const [x, y, z] = arr;
console.log(x, y, z);
//10 20 30
//this does not affect the original array
//if arr contain 6 element then x, y, z take first three value

// if you want to access the directly third element you can do like this
const [, , m] = arr;
console.log(m); //30

//if length is small it give undefine as output or you can use like this

const [p = 1, q = 1, r = 1] = [7, 8];
console.log(p, q, r); // 7 8 1
