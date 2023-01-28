let arr = [10, -20, 30, -25, 15, -5];

//find method does not return the new array
// instead it return the first elemtn which satifie the condition
//other wise it return undined

let ans = arr.find((ele) => ele > 0);
console.log(ans); //10

let ans2 = arr.find((ele) => ele == 0);
console.log(ans2); //undefine
