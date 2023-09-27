function binarySearch(array, target) {
  let startIdx = 0;
  let endIdx = array.length - 1;

  while (startIdx <= endIdx) {
    let midIdx = Math.round((endIdx + startIdx) / 2);

    if (array[midIdx] === target) {
      return midIdx;
    }

    if (array[midIdx] > target) {
      endIdx = midIdx - 1;
      continue;
    }

    startIdx = midIdx + 1;
  }

  return -1;
}

binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33);
