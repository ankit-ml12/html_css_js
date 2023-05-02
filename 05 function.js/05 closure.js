`we will not create closure intentinally it happen and we have to observe when it appear so we can use js to its highest potention `;

let closure = `closure makes a function remeber all variable that existed at the function birthplace `;

("because of the execution context the scope chain is preserved ");
`a function always has the access of the variable environment of the execution context in which it is created even after  that execution context is deleted `;

("we can not access closure because it is not function or property but its internal thing of js");

//condition of closure
// 1. similar ex of nameste js (when you return function )
// 2. when you assign function to some variable

let f;
const g = function () {
  let temp = 233;
  f = function () {
    console.log(temp * 2);
  };
};
g();
f(); //466
//here also closure takes place

//if you reassign some function another function to f into another function then f ramebember the second not the first
