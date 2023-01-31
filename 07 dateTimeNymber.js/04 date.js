//create a date
const now = new Date();
console.log(now); //2023-01-31T03:10:55.925Z

console.log(new Date("2023-01-31T03:10:55.925Z"));
// you can create date by passing all the things
console.log(new Date(2037, 10, 19, 15, 23, 5)); //2037-11-19T09:53:05.000Z

//it also recorrect you time if you pass 31 nov it convert them into 1 dec
console.log(new Date(0)); //1970-01-01T00:00:00.000Z
// if you pass large number it add as much sec inthe default time

const ti = new Date();
console.log(ti); //2023-01-31T03:18:15.245Z
console.log(ti.getFullYear()); //2023
console.log(ti.getMonth()); //0
console.log(ti.getDay()); //2
console.log(ti.getHours()); //8
console.log(ti.getMinutes()); //48
console.log(ti.getSeconds()); //15
console.log(ti.toDateString()); //Tue Jan 31 2023
console.log(ti.getTime()); //1675135223048 give second

// to formate into other iso language code  you have to pass the country code
// forma;
// ('e')
console.log(Intl.DateTimeFormat("en-GB").format(ti)); //31/01/2023
//it automatically converted into the formate according to language code
