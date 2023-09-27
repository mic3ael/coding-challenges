// time: O(n), space: O(1)
function isMonotonic(array) {
  let isNonDesc = true;
  let isNonIncr = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) isNonDesc = false;
    if (array[i] < array[i - 1]) isNonIncr = false;
  }

  return isNonDesc || isNonIncr;
}
