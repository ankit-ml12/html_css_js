let acc = {
  owner: "ankit vishal ravi yash darsh",
};

let ans = acc.owner
  .toLowerCase()
  .split(" ")
  .map((ele) => ele[0])
  .join("");

console.log(ans); // avryd

// we can use methode in chain it reduces out time and efforts

//disadvantage of chaining

//it can cause performance issue if the size of array is huge
//chain methode create new array for each methode
