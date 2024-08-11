/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

function quickSort(nums, startIdx, endIdx) {
  if (startIdx >= endIdx) return;

  let pivotIdx = startIdx;
  let j = startIdx;
  let pivot = nums[endIdx];

  while (j < endIdx) {
    if (nums[j] <= pivot) {
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
