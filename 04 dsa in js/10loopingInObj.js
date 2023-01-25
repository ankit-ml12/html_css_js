const store = {
  timing: {
    openingday: ["mon", "tue", "sun"],
  },
};

console.log(store.timing.openingday);

const ml = store.timing.openingday;

for (const day of Object.keys(store.timing.openingday)) {
  console.log(day); //1 2 3
}
for (const day of Object.values(store.timing.openingday)) {
  console.log(day); //mon tue sun
}
for (const [key, value] of Object.entries(store.timing.openingday)) {
  console.log(`key is ${key} and value is ${value}`);
  // key is 0 and value is mon
  // key is 1 and value is tue
  // key is 2 and value is sun
}

for (const day of ml) {
  console.log(day); //mon, tue, sun
}
