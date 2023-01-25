const question = new Map([
  ["question", "what is the programming language"],
  [1, "C"],
  [2, "java"],
  [3, "js"],
  ["ans", 3],
  [true, "correct"],
  [false, "try again"],
]);
console.log(question);

const obj = {
  name: "ankit",
  age: 24,
  phoe: 99077,
};

//convert obj into map
const myMp = new Map(Object.entries(obj));
console.log(myMp);
//Map(3) { 'name' => 'ankit', 'age' => 24, 'phoe' => 99077 }

// to iterate over map we simply iterate while in case of object we need to use Object.entry();

for (const [key, value] of myMp) {
  console.log(`key is ${key} and value is ${value}`);
}
