function insertionSort(numbers) {
  for (let i = 0, l = numbers.length; i < l; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (numbers[i] < numbers[j]) {
        const spliced = numbers.splice(i, 1);
        numbers.splice(j, 0, spliced[0]);
      }
    }
    console.log(numbers);
  }
}

console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
