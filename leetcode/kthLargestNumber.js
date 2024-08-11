/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
  const kLargestIdx = nums.length - k;
  quickSort(nums, 0, nums.length - 1);
  return nums[kLargestIdx];
};

function quickSort(nums, startIdx, endIdx) {
  if (startIdx >= endIdx) return;

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
  quickSort(nums, startIdx, pivotIdx - 1);
  quickSort(nums, pivotIdx + 1, endIdx);
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
