/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */

// time: O(n) - in the desc sorted array can be O(n^2), space: O(1)
var kthLargestNumber = function (nums, k) {
  const kLargestIdx = nums.length - k;
  return quickSelect(nums, 0, nums.length - 1, kLargestIdx);
};

function quickSelect(nums, startIdx, endIdx, kLargestIdx) {
  if (startIdx >= endIdx) return nums[kLargestIdx];

  let pivotIdx = startIdx;
  let j = startIdx;
  let pivot = parseInt(nums[endIdx]);

  while (j < endIdx) {
    if (parseInt(nums[j]) <= pivot) {
      swap(nums, pivotIdx, j);
      pivotIdx++;
    }
    j++;
  }

  swap(nums, pivotIdx, j);

  if (kLargestIdx == pivotIdx) return nums[kLargestIdx];
  if (kLargestIdx > pivotIdx)
    return quickSelect(nums, pivotIdx + 1, endIdx, kLargestIdx);
  return quickSelect(nums, startIdx, pivotIdx - 1, kLargestIdx);
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
