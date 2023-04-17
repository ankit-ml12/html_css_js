const arr = [1, 2, 3, 4, 5, 6, 7];
//second way to create an array
const arr2 = new Array(7);
const arr3 = new Array(7);
const arr4 = new Array(7);
console.log(arr2); //[ <7 empty items> ]

//none of the method work on the constructed array like this
//fill is the only method will work for this array

// arr2.fill(value, startform, endon);
arr2.fill(2);
console.log(arr2); //[2, 2, 2, 2, 2, 2, 2];
arr3.fill(2, 2);
console.log(arr3); //[ <2 empty items>, 2, 2, 2, 2, 2 ]
arr4.fill(2, 2, 5);
console.log(arr4); //[ <2 empty items>, 2, 2, 2, <2 empty items> ]

// fill methode can be applicable on normal array

//anothe from method

const y = Array.from({ length: 7 }, () => 1);
console.log(y); //[1, 1, 1, 1, 1, 1, 1];

const z = Array.from({ length: 7 }, (curr, i) => i + 1);
console.log(z); //[1, 2, 3, 4, 5, 6, 7];
