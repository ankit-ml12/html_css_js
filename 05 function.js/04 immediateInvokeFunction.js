// this type of function we create to invoke once
//IIFE
(function () {
  console.log("this is immediate invoke function");
})();
//this type of call only once
(() => {
  console.log("this is immediate invoke function");
})();

//USE OF IIFE FOR PROTECT DATA IS REDUCE BECAUSE OF BLOCK SCOPE INTRODUCTION
// BUT WE STILL USE FOR SINGLE TIME INVOKE FUNCTION
