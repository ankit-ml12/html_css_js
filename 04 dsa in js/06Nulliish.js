// Nullish operator

"intorduce in ES 2020";

"nullish value are:- null and undefine";

// why need to remove the error of or statement

const ml = {
  age: 20,
  water: 0,
};

console.log(ml.water || 77); //77 but we want the water amount
// so we use  nullish operator which will leave value only and only when they null or undefine
console.log(ml.water ?? 77); //0

//it give 77 if water is not there in ml obj
