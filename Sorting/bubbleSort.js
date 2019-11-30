function bubbleSort(numbers) {
  let swapCount = 0;
  let count = 0;
  do {
    swapCount = 0;
    for (let i = 0, l = numbers.length; i < l; i++) {
      count = count + 1;
      if (numbers[i] > numbers[i + 1]) {
        temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        swapCount = swapCount + 1;
      }
    }
  } while (swapCount > 0);
  console.log(count);
  return numbers;
}

console.log(bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
