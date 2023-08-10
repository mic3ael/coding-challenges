function twoNumberSum(array, targetSum) {
  // Write your code here.
  const passed = new Set();

  for (let i = 0; i < array.length; i++) {
    const diff = targetSum - array[i];
    if (!passed.has(diff)) {
      passed.add(array[i]);
      continue;
    }
    return [diff, array[i]];
  }

  return [];
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
