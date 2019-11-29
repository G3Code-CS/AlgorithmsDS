function factorial(n) {
  if (n < 2) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

for (let i = 1; i < 6; i++) {
  console.log(`Factorial of ${i} is ${factorial(i)}`);
}
