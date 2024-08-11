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

// time: O(logN), space: O(1)
function searchRange2(nums, target) {
  let idx = findIndexOfTheTarget(nums, target);
  const result = [idx, idx];
  if (idx === -1) return result;
  let idxLeft = idx;
  let idxRight = idx;
  while (idxLeft != -1 || idxRight != -1) {
    idxLeft = findIndexOfTheTarget(nums, target, 0, idxLeft - 1);
    idxRight = findIndexOfTheTarget(
      nums,
      target,
      idxRight + 1,
      nums.length - 1
    );

    result[1] = Math.max(result[1], idxRight);
    if (idxLeft != -1) result[0] = Math.min(result[0], idxLeft);
  }

  return result;
}

function findIndexOfTheTarget(
  nums,
  target,
  startIdx = 0,
  endIdx = nums.length - 1
) {
  while (startIdx <= endIdx) {
    let midIdx = Math.floor((startIdx + endIdx) / 2);
    if (target === nums[midIdx]) return midIdx;
    if (nums[midIdx] < target) startIdx = midIdx + 1;
    else endIdx = midIdx - 1;
  }

  return -1;
}

console.log(searchRange2([1, 3, 3, 5, 5, 5, 8, 9], 5)); // [ 3, 5 ]
console.log(searchRange2([1, 3, 3, 5, 5, 5, 8, 9], 3)); // [ 1, 2 ]
console.log(searchRange2([1, 3, 3, 4, 5, 8, 9], 8)); // [ 5, 5 ]
console.log(searchRange2([1, 3, 8, 9], 5)); // [ -1, -1 ]
console.log(searchRange2([], 5)); // [ -1, -1 ]
console.log(findIndexOfTheTarget([1, 2, 3, 4, 5, 6], 6)); // 5
