"use strict";

//short circuit evaluation of || statement
`OR do the sort circuting at first true value`;
console.log(3 || "jonas");
console.log("" || "jonas");
console.log(true || 0);
console.log(undefined || null);
// 3
// jonas
// true
// null
console.log(undefined || 0 || "" || "hello" || 23 || null);
//hello

// sort circuiting of && statement
`end operator short circuit when first value is false value`;
console.log(0 && "jonas"); //0
console.log("jonas" && 0); //0
console.log("hello" && 23 && "" && undefined && 0 && null); //0
