function moveElementToEnd(array, toMove) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx < rightIdx) {
    while (leftIdx < rightIdx && array[rightIdx] === toMove) rightIdx--;
    if (array[leftIdx] === toMove) swap(array, leftIdx, rightIdx);
    leftIdx++;
  }
  return array;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
