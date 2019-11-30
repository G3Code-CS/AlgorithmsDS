function mergeSort(numbers) {
  if (numbers.length < 2) {
    return numbers;
  }
  let lengthVal = numbers.length;
  let middleVal = Math.floor(lengthVal / 2);
  let leftVal = numbers.slice(0, middleVal);
  let rightVal = numbers.slice(middleVal, lengthVal);
  //   console.log(rightVal, leftVal);
  return stitch(mergeSort(leftVal), mergeSort(rightVal));
}

function stitch(leftVal, rightVal) {
  //   console.log(leftVal, rightVal);
  let results = [];
  while (leftVal.length && rightVal.length) {
    if (leftVal[0] < rightVal[0]) {
      results.push(leftVal.shift());
    } else {
      results.push(rightVal.shift());
    }
  }
  while (leftVal.length) {
    results.push(leftVal.shift());
  }
  while (rightVal.length) {
    results.push(rightVal.shift());
  }
  return results;
}

console.log(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
