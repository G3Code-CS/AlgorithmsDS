function insertionSort(numbers) {
  count = 0;
  for (let i = 1, l = numbers.length; i < l; i++) {
    for (let j = 0; j < i; j++) {
      count = count + 1;
      if (numbers[i] < numbers[j]) {
        const spliced = numbers.splice(i, 1);
        numbers.splice(j, 0, spliced[0]);
      }
    }
  }
  console.log(count);
}

console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
