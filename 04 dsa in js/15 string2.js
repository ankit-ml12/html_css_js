let ml = "Hello Ankit You can Do iT mEN";
console.log(ml);

`convert into uppercase lowecase`;
//does not affect the original array

console.log(ml.toUpperCase()); //HELLO ANKIT YOU CAN DO IT MEN
console.log(ml.toLowerCase()); //hello ankit you can do it men
console.log(ml); //Hello Ankit You can Do iT mEN

("we use .trim() function to remove the space after the words");

("learn how to use replace function ");
// it replace first char or string
const priceGB = "288,97#";
let priceUs = priceGB.replace("#", "$");
const priceUs2 = priceUs.replace(",", ".");

console.log(priceUs2); //288.97$
priceUs = "a,v,d,";
// to replace all the char use g tag /
const priceUs3 = priceUs.replace(/,/g, ".");
console.log(priceUs3); //a.v.d.

("you can also use .include , startsWith, endWith ");

//it return true and false
