const orderSet = new Set([10, "10", 10, "10", 20, 30, 30, 40, 50, 50]);

console.log(orderSet); // 10 "10" 20 30 40 50

// elements are uniq and order is irrelevent
// we use size not length to find size of set

//to check elemtn is present or not
console.log(orderSet.has(10)); // true
console.log(orderSet.has(100)); //false

//similar to include methods in array

("to add element use .add methode");

console.log(orderSet.add(100)); // return the whole set
console.log(orderSet.has(100)); //true

("to remove use .delete() methode");
orderSet.delete(100);
console.log(orderSet.has(100)); //false

// you can not do like this orderSet[0] it is wrong

("to delete whole set use .clear() methode");
orderSet.clear();
console.log(orderSet.size); //0

// you can iterate like this
for (const order of orderSet) console.log(order);

//spread use
const arr = [...orderSet];
console.log(arr);
