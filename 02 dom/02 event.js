// EventListener

"event is something that happen on the page and with the help of evenlistener we can wait to certain even happen and then react on it";

// HOW TO USE EVEN LISTENER
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
//inside event listener we pass one is even and the section the event that is going to happen once the even is occure
// when we store the value inside console log the value it is allways inthe form of string
