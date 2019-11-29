function recursive(max, current) {
  if (current <= max) {
    console.log(current);
    current = current + 1;
    recursive(max, current);
  }
}

recursive(5, 0);
