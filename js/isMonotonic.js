// time: O(n), space: O(1)
function isMonotonic(array) {
  if (!array.length || array.length === 1) return true;
  let isMono = true;
  // increasing
  for (let i = 1; i < array.length; i++) {
    if (!isMono) break;
    if (array[i] >= array[i - 1]) continue;
    isMono = false;
  }

  if (isMono) return true;

  // descreasing
  isMono = true;
  for (let i = 1; i < array.length; i++) {
    if (!isMono) break;
    if (array[i] <= array[i - 1]) continue;
    isMono = false;
  }

  return isMono;
}
