// time: O(nlog(n)), space: O(nlog(n))
function mergeSort(array) {
  if (array.length <= 1) return array;
  const midIdx = Math.floor(array.length / 2);
  const leftSide = array.slice(0, midIdx);
  const rightSide = array.slice(midIdx);
  return mergeSortedArrays(mergeSort(leftSide), mergeSort(rightSide));
}

function mergeSortedArrays(arr, arr2) {
  if (!arr.length) return arr2;
  else if (!arr2.length) return arr;
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < arr.length && j < arr2.length) {
    if (arr[i] <= arr2[j]) {
      merged.push(arr[i]);
      i++;
      continue;
    }
    merged.push(arr2[j]);
    j++;
  }

  if (i < arr.length) merged.push(...arr.slice(i));
  if (j < arr2.length) merged.push(...arr2.slice(j));

  return merged;
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));
