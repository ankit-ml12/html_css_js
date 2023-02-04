//events and types of events
//read more about event on the mdn

//first and modern way
const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", function (e) {
  alert("hello ankit");
  console.log("ankit");
});

// old way
h1.onmouseenter = function (e) {
  alert("temp");
};

// using html
//like onclick

//advantage of modern way
//1. you can set multiple event in case of old second event override the first
//2. you can remove it if not required

const temp = function () {
  alert("hello testing with ankit");
  h1.removeEventListener("mouseenter", temp);
};
h1.addEventListener("mouseenter", temp);
// we can also remove using setTimeOut function
