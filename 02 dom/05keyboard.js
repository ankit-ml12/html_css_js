// KEY BORDS EVENTS
// KeyboardEvent are basically global even because they will not happen only one paticular type of even

document.addEventListener("keydown", function (x) {
  true;
});
document.addEventListener("keypress", function (x) {
  true;
});
document.addEventListener("keyup", function (x) {
  true;
});

// when ever the key is pressed we have information related to the event in the event handler function
// you can access that key by x.key
