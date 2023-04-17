// sort method
// this method actually mutate the original array

//strings
let nameList = ["darsh", "yash", "ankit", "ravi", "yashu"];
nameList.sort();
console.log(nameList); //[ 'ankit', 'darsh', 'ravi', 'yash', "yashu" ]

//numbers
let arr = [10, -20, 40, -50, 70, -80, 150];
// let arr2 = [10, 20, 40, 50, 70, 80, 150];
arr.sort();
console.log(arr);
// [-20, -50, -80, 10, 150, 40, 70];
// it work based on the string (first convert it into string and then sort them )

//if we return +ve then A, B
//if we return -ve then B, A

arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
// [-80, -50, -20, 10, 40, 70, 150];
