// instead of poping the element from the array we can redefine the size of the array also

let arr = [1, 4, 7, 8, 5, 2];
console.log(arr); //[ 1, 4, 7, 8, 5, 2 ]

arr.length = arr.length - 1;
console.log(arr); //[ 1, 4, 7, 8, 5 ]

arr.length = arr.length - 1;
console.log(arr); //[ 1, 4, 7, 8 ]
