// First class function

let Node;
Node = `js consider function as first class citizen`;
Node = `This means functions are simply values`;
Node = `Function are just another type of object `;
Node = "Since object are value so function are vlaue to ";
`because of this reason we can store them in some parameter or value `;
("we can pass them as a argument in another function");
("return them from any function");
("call methode on any function "); // it have different methode

//Higher order function

("js first class function make us possible for us to use higher order function ");

("Higher order function is the function that receive function as a agrument or returning some function");
("this is possible because of the first class function ");

//note
//we can call functin like this ()()

let ankit = function () {
  return function (a, b) {
    return a + b;
  };
};
console.log(ankit()(15, 24));
