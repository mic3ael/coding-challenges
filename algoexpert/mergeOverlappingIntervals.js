// time: O(nlog(n)), space: O(n) - where n is the length of the input array
function mergeOverlappingIntervals(array) {
  if (array.length < 2) return array;
  array.sort((interval, interval2) => interval[0] - interval2[0]);
  const merged = [array[0]];
  for (let i = 1; i < array.length; i++) {
    const [prevStart, prevEnd] = merged[merged.length - 1];
    const [start, end] = array[i];

    if (prevEnd < start) {
      merged.push([start, end]);
      continue;
    }
    merged.pop();
    merged.push([Math.min(prevStart, start), Math.max(prevEnd, end)]);
  }
  return merged;
}

const result = mergeOverlappingIntervals([
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
]);
