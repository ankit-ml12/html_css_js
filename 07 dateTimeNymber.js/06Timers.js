setTimeout(() => {
  console.log("here is your pizza 🍕");
}, 2000);
//callback and time

//code edecution will not wait for 2se it just create callback function and move to the next line

// we are not calling this functin so how to pass the variable

// so we will pass them aster timer and use inside () function
//ex:-

setTimeout(
  (per1, per2) => {
    console.log(`${per1} & ${per2} are two room mate.`);
  },
  3000,
  "yash",
  "ankit"
);

// even if we want we can cancel out setTimeout function if we want before it time is over

// for that we use clearTimeout(name)

// like this

let arr = ["mob1", "mob2"];

let time = setTimeout(
  (one, two) => {
    console.log(`i have ${one} and ${two}`);
  },
  2000,
  ...arr
);

if (arr.includes("mob1")) clearTimeout(time);

// if we want to call a function after every one sec
//we use setInterval

setInterval(() => {
  console.log("i am the best");
}, 1000);
