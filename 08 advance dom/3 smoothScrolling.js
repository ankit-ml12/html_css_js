const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  //below function give the coordinate of section 1
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  //DOMRect {x: 0, y: 397.3333435058594, width: 1688, height: 1822.25, top: 397.3333435058594, …}
  // x is the distance of element from the left of the page
  // y is the distance of element from the top  of the page

  // to check the distance from left and top of the current view portDOMRect {x: 0, y: 397.3333435058594, width: 1688, height: 1822.25, top: 397.3333435058594, …} we use offset
  console.log(`Current Scroll (X/Y)`, window.pageXOffset, window.pageYOffset); //Current Scroll (X/Y) 0 0
  console.log(e);

  //to check the height and width of client viewport
  console.log(
    "height & width of viewPort",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //now to scroll window we use scroll method and provide the location
  window.scrollTo(s1coords.left, s1coords.top);
  // but it will not work in case of page is scroll then left and top point change
  //so solve that issue we use

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //scorlling is not smooth of above methode so we use this method
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });

  //but there is even better methode
  //select the section and apply scrollTo methode on it
  section1.scrollIntoView({ behavior: "smooth" });
});
