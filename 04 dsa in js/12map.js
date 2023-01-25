const myMap = new Map();

myMap.set("name", "ankit");
myMap.set("age", 24);
console.log(myMap.set("phone", 99077));
//Map(3) { 'name' => 'ankit', 'age' => 24, 'phone' => 99077 }
//add methode return the whole map

//we can do chain
myMap.set("school", "ibs").set("blood", "B+");

("to access value of any key");
console.log(myMap.get("name")); //ankit
console.log(myMap.get("phone")); //99077
console.log(myMap.get("pho")); //undefine

("to check the presence of key in map we use .has mehtode");

console.log(myMap.has("name")); //true
console.log(myMap.has("phone")); //true
console.log(myMap.has("pho")); //false

("to delete we use .delete() methode");
("to find size we use myMap.size with parenthesis");
("to clear whole map we use .clear() methode");
