//map and filter method create a new array for there operation
//reduce reduces the element into single element

///  map craete a array of same size with applied operation
/// filter :- filter the element of the arr and store them in new array according to applied condition
///reduce := reduce into one element

//implement

let arr = [10, 20, 30, 25, 15, 5];

// similar to foreach we use map
let ans = arr.map(function (ele, i) {
  return 2 * ele;
});

console.log(ans); //[ 20, 40, 60, 50, 30, 10 ]

//we can use arrow function for map method
let ans2 = arr.map((ele) => 5 * ele);
console.log(ans2); //[ 50, 100, 150, 125, 75, 25 ]
// map also have access of three element element index and wholearray

//forEach method allway return undefine
//while map method return the new arr with applied operation

let ans3 = arr.filter(function (ele) {
  if (ele % 2 == 1) return ele;
});

console.log(ans3); //[ 25, 15, 5 ]
// also have access of three element
// can use arrow method

//reduce
// it is different
// in reduce  the first element is accumulator
// in reduce  the sec element is element
// in reduce  the third element is index
// in reduce  the fourth element is array

let ans4 = arr.reduce((acc, ele) => (acc += ele));
console.log(ans4); //105

//we can also pass the initial value of acc in above function
let ans5 = arr.reduce((acc, ele) => (acc += ele), 95);
console.log(ans5); //200
