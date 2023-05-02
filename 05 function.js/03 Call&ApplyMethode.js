const ml = {
  name: "ankti",
  age: 24,
  intro(company, location) {
    console.log(
      ` my name is ${this.name} && age is ${this.age} && working in ${company} in ${location}`
    );
  },
};

const ml2 = {
  name: "ravi",
  age: 27,
};

ml.intro("nexan", "ujjain"); // {calling with the help of ml object so this keyword point to ml object}
// my name is anktit && age is 24 && working in nexan in ujjain

//but if i copy intro function on another varible
let temp = ml.intro; // it it not copy it is regular function

temp("crio", "datotar");
// my name is undefined && age is undefined && working in ravi in villege
//because this point is point to undefine in this case

// how to tell program we want to use temp function for ml or ml2 function
//by using call and apply methode

//call method
temp.call(ml2, "crio", "datotar");
// my name is ravi && age is 27 && working in crio in datotar
//first argument is function name and remaining is the passing argument

temp.call(ml, "self", "indore");
// my name is anktit && age is 24 && working in self in indore

//apply method
// work similar to call methode the only difference is we pass argument inside array

temp.apply(ml, ["google", "ujjain"]);
// my name is anktit && age is 24 && working in google in ujjain

//Bind method
//instead of using apply or call methode we can bind this keyword with perticular then we don't need to pass obj name everytime

const mlintro = temp.bind(ml);
mlintro("Uber", "benglore");
// my name is anktit && age is 24 && working in Uber in benglore

const ml2intro = temp.bind(ml2);
ml2intro("amazon", "hyderabad");

//even we can go one step further

const mlintro_google = temp.bind(ml, "google");
mlintro_google("indore");
//  my name is anktit && age is 24 && working in Uber in indore
// here first term come from bind method

//read more letter
