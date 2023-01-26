"use strict";

const bookings = [];
const creatBooking = function (
  //here we can intilise parameter with default value so if useer will not send
  //default value is assign to them
  flightName,
  numPasanger = 1,
  price = 200 * numPasanger
) {
  const booking = {
    flightName,
    numPasanger,
    price,
  };
  bookings.push(booking);
};

creatBooking("ml", 1, 20);
console.log(bookings);

// remember
("premitive data type always copy them self when we pass them in function ");
`but in case of non premitive type data is allways pass by referece`;
`pass by reference is different from the passing reference SO we are passing reference in js`;
