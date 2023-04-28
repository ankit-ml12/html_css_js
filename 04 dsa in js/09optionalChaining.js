let obj = {
  ujjain: {
    makdon: {
      ghar: "hanuman road",
      school: "main road",
    },
  },
  indore: {
    bhopal: {
      hostel: "hathipal",
    },
  },
};

// to access ghar first we have to check like this
if (obj.ujjain && obj.ujjain.makdon) {
  //then only we can check for ghar other wise if we try to access undefine.next it give error
  console.log(obj.ujjain.makdon.ghar); //hanuma road
}
`some time this chainlength become to large when we fetch data from other server `;
("so we use optional chianing introduce in ES2020");

//with optional chain
console.log(obj.ujjain?.makdon?.ghar); //hanuman road
console.log(obj.indore?.makdon?.ghar); // undefine (with out opetinal chaining it give error)

console.log(obj.indore?.makdon?.ghar ?? "this does not exist "); // this does not exist
// if ans is undefine we get this does not exist
