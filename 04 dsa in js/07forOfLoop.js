let arr = [10, 20, 30, 40, 50, 60];

for (const temp of arr) console.log(temp);

("we can able to use continue or break statement in his for loop ");

let arr2 = [
  [1, "ravi"],
  [2, "vishal"],
  [3, "ankit"],
  [4, "yash"],
  [5, "darsh"],
];
`we can interate over like this`;
for (const [first, sec] of arr2) {
  console.log(`position is ${first} && name is ${sec}`);
}
