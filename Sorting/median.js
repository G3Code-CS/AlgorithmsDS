function median(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  let length = result.length;
  if (length % 2 == 0) {
    return [result[length / 2 - 1], result[length / 2]];
  } else {
    return result[Math.floor(length / 2)];
  }
}

console.log(median([1, 5, 8, 9], [2, 3, 7, 10]));
