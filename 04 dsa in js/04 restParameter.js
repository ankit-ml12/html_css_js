// we use spread to spread element of array into individual element

//spread because we are using right side of =
const arr = [1, 2, ...[3, 4]];

//REST because left side of =
const arr2 = [1, 2, 3, 4, 5];
const [a, b, ...other] = arr2;
console.log(other); // [3, 4, 5]

//in case of Object
const obj = {
  name: "ankit",
  age: 24,
  blood: "B",
  merride: false,
};
const { ...ml } = obj;
console.log(ml); //{ name: 'ankit', age: 24, blood: 'B', merride: false }

// function

const add = function (...nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans += nums[i];
  }
  console.log(ans);
};
add(2, 5); //7
add(10, 15, 17); //42
add(1, 2, 3, 4, 5); //15

//rest parameter is used to collect all the parameter which is not used
