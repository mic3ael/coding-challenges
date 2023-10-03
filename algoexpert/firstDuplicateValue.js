// time: O(n), space: O(n)
function firstDuplicateValue(array) {
  const hash = new Set();
  for (const elem of array) {
    if (hash.has(elem)) return elem;
    hash.add(elem);
  }
  return -1;
}

// time: O(n), space: O(1) - When array numbers range up to 'n', the array length.
function firstDuplicateValue2(array) {
  for (const elem of array) {
    const abs = Math.abs(elem);
    if (array[abs - 1] < 0) return abs;
    array[abs - 1] = array[abs - 1] * -1;
  }

  return -1;
}
