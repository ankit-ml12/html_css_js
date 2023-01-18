// function is resuable code that we case use over and over again

function logger() {
  console.log("hello ankit");
}
logger(); //invoking , calling, running

// /==================================
("function declaration and expression");

// function declaration
function calAge(birthYear) {
  return 2022 - birthYear;
}

//function expression
let calAge2 = function (birthYear) {
  return 2022 - birthYear;
};

// ==============================================
("Arrow function ");
let calAge3 = (birthYear) => 2022 - birthYear;

let calAge4 = (birthYear) => {
  return 2022 - birthYear;
};

//fucntion contain parameter
//we pass the argument
