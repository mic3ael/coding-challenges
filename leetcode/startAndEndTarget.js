// time: O(logN), space: O(logN)
function searchRange(
  nums,
  target,
  startIdx = 0,
  endIdx = nums.length - 1,
  result = [-1, -1]
) {
  if (startIdx > endIdx) return result;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  if (target === nums[midIdx]) {
    if (result[0] == -1) {
      result[0] = midIdx;
      result[1] = midIdx;
    } else {
      if (result[0] > midIdx) result[0] = midIdx;
      if (result[1] < midIdx) result[1] = midIdx;
    }
    searchRange(nums, target, startIdx, midIdx - 1, result);
    searchRange(nums, target, midIdx + 1, endIdx, result);
    return result;
  }
  if (target < nums[midIdx])
    return searchRange(nums, target, startIdx, midIdx - 1, result);
  return searchRange(nums, target, midIdx + 1, endIdx, result);
}

console.log(searchRange([1, 3, 3, 5, 5, 5, 8, 9], 5));
console.log(searchRange([1, 3, 3, 5, 5, 5, 8, 9], 3));
console.log(searchRange([1, 3, 3, 4, 5, 8, 9], 8));
console.log(searchRange([1, 3, 8, 9], 5));
console.log(searchRange([], 5));
