const ankit = {
  firstName: "ankit",
  secondName: "patidar",
  age: 24,
  phone: 9907774582,
  year: 1999,
  frend: ["yash", "temp", "jekkk"],
  calAge1: function (age) {
    return 2022 - age;
  },
  calAge2: function () {
    return 2022 - this.year; //this means whole object
  },
};
// address is object and it has 4 property
// there are many way to create an object but creating with curly breces is the easiest one
// this methode of creating an object is called
("Object literal syntex");

`similar to array we use object to group together different variable that really belongs to together`;
("but the main differece is between object and array  In object the order of present value inside it does not matter when we retrieve them  but in array position of element is matter ");

// ======================================================================================================

("dot and bracket notation ");

console.log(ankit.firstName);
console.log(ankit.age);
console.log(ankit["age"]); //giving key value is string is necessary

//what is use of [ ] notation
let ml = "age";
// we can not do ankit.ml but can ankit[ml]

// insert element using . and [] noration

ankit.weight = 40;
ankit["height"] = 5.5;
console.log(ankit);

// ==========================================================================
("Object Method ");
