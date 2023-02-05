//dom traversing means walking through the dom

// walking from one element to another

///////////////////////////////////////
// DOM Traversing
const h1 = document.querySelector("h1");
//give all the child class of h1 element
// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
//give Nodelist of all the children of h1 (everythings)
console.log(h1.children);
//give list of all the html collections

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";

h1.closest("h1").style.background = "var(--gradient-primary)";

// Going sideways: siblings
//we can get only pre and next

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});
