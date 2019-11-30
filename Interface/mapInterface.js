let animals = new Map([
  [1, "panda"],
  [2, "cat"],
  [3, "dog"]
]);

animals.set(4, "bear");
console.log(animals.get(1));
console.log(animals.has(4));
console.log(animals.keys());
