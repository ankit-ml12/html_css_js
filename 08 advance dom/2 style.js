// learn about style
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
//also need to include the % or unit with the " "
//remeber this all style go into the inline
// if we try to access the css external or internal style this way we can't get.

// so we use different way of computedstyle like this
console.log(getComputedStyle(message).color); // we get the actual color from here
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

//we can set some root propety on css page like this
/*:root {
    it is similar to variable declaration 
    --color-primary: #5ec576;
    --color-secondary: #ffcb03;
    --color-tertiary: #ff585f;
    --color-primary-darker: #4bbb7d;
    --color-secondary-darker: #ffbb00;
    --color-tertiary-darker: #fd424b;
    --color-primary-opacity: #5ec5763a;
    --color-secondary-opacity: #ffcd0331;
    --color-tertiary-opacity: #ff58602d;
    --gradient-primary: linear-gradient(to top left, #39b385, #9be15d);
    --gradient-secondary: linear-gradient(to top left, #ffb003, #ffcb03);
  }
*/
//which we can able to access and modified using  javascript
//to change this property we use
document.documentElement.style.setProperty("--color-primary", "orangered");
//so we can't do this with the custome property we have to use setPropety

//attribute
const logo = document.querySelector(".nav__logo");
console.log(logo.alt); //Bankist logo
console.log(logo.src); //http://127.0.0.1:5501/05%20bankist%20marketing/img/logo.png

//using this methode we can only access the standard propety not the define by us
//we can also able to set them
logo.alt = "Bankist logo";

//so to access non stand we use get attribute method
console.log(logo.getAttribute("designer")); //ankit
//to set notstandard we use setattribute
logo.setAttribute("designer", "ankitml");

// boundary cases in case of standard
console.log(logo.src); //http://127.0.0.1:5501/05%20bankist%20marketing/img/logo.png
console.log(logo.getAttribute("src")); //img/logo.png

//special attribute data attribute
//we learn more about letter
console.log(logo.dataset.versionNumber);

//classes
logo.classList.add("a"); //you can pass multiple
logo.classList.remove("a"); //you can pass multiple
logo.classList.toggle("a"); //you can pass multiple
logo.classList.contains("a"); //you can pass multiple
console.log(logo.className); // return all the name contain in the class

//but don't use like this and we can set only one class here
// logo.className = "ankit"; //it remove all the existing classes
