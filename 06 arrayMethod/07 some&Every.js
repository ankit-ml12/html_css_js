//with the help of includes methode we are able to find the presence of specific element inside the array

// but what is we want to test for certain condition

//here some methdoe comes into picture
//some :-
//return true and false;
let arr = [10, -20, 40, -50, 70, -80, 150];

let ans = arr.some((move) => move < -50);
let ans2 = arr.some((move) => move < -150);
console.log(ans, ans2); //true false;

//every method
//return true only if all the element of the arr pass the given codition
let arr2 = [10, 20, 40, 50, 70, 80, 150];

let ans3 = arr2.every((ele) => ele > 5);
let ans4 = arr2.every((ele) => ele < 100);
console.log(ans3, ans4); //true, false
