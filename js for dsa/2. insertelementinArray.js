let arr = [10, 20, 40, 50];
// at position 3 insert 30
console.log(arr);
let pos = 2;
for (let i = arr.length - 1; i >= pos; i--) {
  arr[i + 1] = arr[i];
}
arr[pos] = 30;

console.log(arr); //[ 10, 20, 30, 40, 50 ]
arr.push(60);
console.log(arr); //[ 10, 20, 30, 40, 50, 60 ]

//learning
// we can access position even after array length and we can use push to insert element
