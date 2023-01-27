const move = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const it of move) {
  console.log(it);
}

move.forEach(function (it) {
  console.log(it);
});

//you can also use move as a map wher index are key and value are value.

move.forEach(function (element, index, entirearr) {
  console.log(element, index, entirearr);
});

// for each on map and sets.

const ml = new Map([
  ["1", "one"],
  ["2", "two"],
  ["3", "three"],
]);

ml.forEach(function (currValue, key, entiremap) {
  console.log(currValue, key, entiremap);
});

//same thing with set
//in set key and value are the same
