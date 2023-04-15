const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// array are basically object  then have access of method

//1. slice method (allready converd)

//2. Splice method

//it modified the actual array
//in simple word return the same thing that slice methode do
// but remaining part is left in the array

const ml = movements.splice(3, 2);
console.log(ml); // 3000 -650
console.log(movements); //200 450 -400 -130 70 1300

//3. reverse method
// it actually change the original array
movements.reverse();
console.log(movements);

//4. concate method allready read

//5. join method
//join the every element of array inthe string

//6. at method
const move = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(move.at(0)); //200
console.log(move.at(-1)); //1300
