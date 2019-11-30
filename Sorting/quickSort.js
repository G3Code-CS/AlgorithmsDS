function quickSort(numbers) {
  let l = numbers.length;
  if (l < 2) {
    return numbers;
  } else {
    let pivot = numbers.pop();
    let left = [];
    let right = [];
    while (numbers.length) {
      if (pivot > numbers[0]) {
        left.push(numbers.shift());
      } else {
        right.push(numbers.shift());
      }
    }
    return [].concat(quickSort(left), pivot, quickSort(right));
  }
}

console.log(quickSort([10, 8, 2, 1, 6, 3, 9, 4, 7, 5]));
