let arr = [10, -20, 30, -25, 15, -5];

//find method does not return the new array
// instead it return the first element which fullfill the condition
//other wise it return undefine

let ans = arr.find((ele) => ele > 0);
console.log(ans); //10

let ans2 = arr.find((ele) => ele == 0);
console.log(ans2); //undefine
