function hasSingleCycle(array) {
  // Write your code here.

  let numberVisitedIdx = 0;
  let currentIndex = 0;
  while (numberVisitedIdx < array.length) {
    if (numberVisitedIdx > 0 && currentIndex === 0) return false;
    numberVisitedIdx++;
    currentIndex = getNextIdx(array, currentIndex);
  }
  return currentIndex === 0;
}

function getNextIdx(array, index) {
  const jumps = array[index];
  let nextIndex = index + jumps;
  nextIndex = nextIndex % array.length;

  if (nextIndex >= 0) {
    return nextIndex;
  }

  return array.length + nextIndex;
}

const data = [[0, 1, 1, 1, 1]];

data.forEach((arr, index) => {
  const result = hasSingleCycle(arr);
  console.log(`result${index}: `, result);
});
