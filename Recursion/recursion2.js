// function fibonacci(n) {
//   let series = [];
//   series[0] = 1;
//   series[1] = 1;
//   for (let i = 2; i < n; i++) {
//     series[i] = series[i - 1] + series[i - 2];
//   }
//   console.log(series);
// }

function fibonacci(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(`${i} : ${fibonacci(i)}`);
}
