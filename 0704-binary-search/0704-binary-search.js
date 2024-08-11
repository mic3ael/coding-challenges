/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, startIdx = 0, endIdx = nums.length - 1) {
    if(startIdx > endIdx) return -1;

    let midIdx = Math.floor(( startIdx + endIdx ) / 2);
    if(nums[midIdx] === target) return midIdx;

    if(nums[midIdx] > target) 
        return search(nums, target, startIdx, midIdx - 1);
    return search(nums, target, midIdx + 1, endIdx);
};