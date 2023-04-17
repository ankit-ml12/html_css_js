let arr = [
  [1, [2, [3]], 4],
  [
    [5, 6],
    [7, 8],
  ],
  [[9, 10], 11, 12],
];

//flat method
console.log(arr.flat().flat().flat());
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(arr.flat());
[1, [2, [3]], 4, [5, 6], [7, 8], [9, 10], 11, 12];

// we can also flat arr as much level as we want by passing value iside it
console.log(arr.flat(3));
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//flatMap method
//we also have flatMap methde which work on the arr or obj which first use map and then create
