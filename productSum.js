function productSum(array, multiplier = 1) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const result = productSum(array[i], multiplier + 1);
      sum += result;
      continue;
    }
    sum += array[i];
  }
  return sum * multiplier;
}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
