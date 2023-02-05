//whenever a event happen it goes from bubbling and capturing phase
//in capturing it start from the document and move to target
//in bubbling it return to the document

//not happen with every event but mostly it happen

//in even handler this keywork is allways point to the even in which it takes place

// event happend at root and then it move down to event handler
// so first effect happen at root and slowly slowly effect reflect in the target also

// Event Propagation in Practice
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
//generate random color
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});
//e.target is the location where even is happening
//e.currentTarget is the element on which event handler is attached
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});

// so when we click on button we got this in console
//LINK -> CONTAINER ->NAV

// event handler only follow the bubbling phase not the capturing phase
//if you want to do in capturing phase then you have to pass the true in the addeventlistner
//now the order is change from Nav to link
