function hasSingleCycle(array) {
  let startingIndex = 0;
  let [currentIndex, value] = getValue(
    array,
    startingIndex,
    array[startingIndex]
  );
  while (startingIndex < array.length) {
    [currentIndex, value] = getValue(array, currentIndex, value);

    if (currentIndex === startingIndex) return true;

    if (currentIndex > startingIndex) {
      startingIndex++;
    }
  }

  return false;
}

function getValue(array, index, jumps) {
  let newIndex = index + jumps;
  newIndex = newIndex % array.length;

  if (newIndex >= 0) {
    return [newIndex, array[newIndex]];
  }

  return [newIndex, array[array.length - 1 + newIndex]];
}
function hasSingleCycle2(array) {
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

hasSingleCycle([2, 3, 1, -4, -4, 2]);
