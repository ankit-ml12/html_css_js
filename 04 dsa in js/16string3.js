const str = "ad+kf+dfc+dgd+cds+csd+dfd";

`.split() method split the string by give value provide inside it `;

const ml = str.split("+");
console.log(ml);
//  [
//   'ad',  'kf',
//   'dfc', 'dgd',
//   'cds', 'csd',
//   'dfd'
// ]

`join() method join the arr by give value provide inside it `;

const ml2 = ml.join(" ");
console.log(ml2); //ad kf dfc dgd cds csd dfd

//padding

let str2 = "ankit";

console.log(str2.padStart(10, "+").padEnd(20, "+"));
//+++++ankit++++++++++

//repeat methode

let str3 = "hello ankit";
console.log(str3.repeat(5)); //hello ankithello ankithello ankithello ankithello ankit
console.log(str3); //hello ankit
