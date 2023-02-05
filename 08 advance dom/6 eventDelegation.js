///////////////////////////////////////////////////
// page navigation

document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("hello ankit");
    const id = this.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

//it is ok for three button but let suppose if we have 1000 button then it is not good practice
// to add 1000 even listner or may be million
//which impect our performance

//so we put even handller on grand parent and user click on the that element then even is generated
//and bubbles up and then we catch the event because we also know where the event originated
// by looking at event.target property

//==> event delegation steps
//1. add event to the common parent element
//2. determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  //and that event store inthe e.target
  console.log(e.target);
  e.preventDefault();
  //apply matching stretegy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//even delegation is more efficient and effective
