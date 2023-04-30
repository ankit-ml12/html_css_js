const airline = "Air India Asia";
const plan = "A320";
console.log(plan[0]); //A
console.log(plan[1]); //3
console.log(plan[2]); //2
console.log(plan[3]); //0
console.log("temop"[3]); // O

//SIZE
console.log(airline.length); //14

`find the index of char`;
// first and last
//return first index
//you can also seach string
//return -1 if element is not present
console.log(airline.indexOf("A")); //0
console.log(airline.lastIndexOf("A")); //10
console.log(airline.indexOf("Asi")); //10

`slice a part of string or if you want substring from perticular index`;
//does not change the original string
//return the slice substring
//it start slicing from the starting index

console.log(airline.slice(4)); //India Asia

//similar to starting index we can also able to pass the ending index
//when you pass ending index it slice the string till endindex-1;
console.log(airline.slice(4, 8)); //Indi    (8 is not included)
console.log(airline.slice(4, 4)); // ""

//what if we pass negative index
//then it star couting from the end
console.log(airline.slice(-4)); //Asia
console.log(airline.slice(4, -3)); //India A
