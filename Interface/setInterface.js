let animal = new Set();
animal.add("panda");
animal.add([1, 2, 3]);
console.log(animal.size);
animal.forEach(a => {
  console.log(a);
});
//animal.delete("panda");
console.log(animal);
console.log(animal.keys());
animal.clear();
console.log(animal);
