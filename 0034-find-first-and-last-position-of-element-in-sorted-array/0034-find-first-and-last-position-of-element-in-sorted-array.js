/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let idx = nums.length;
    let startIdx = -1;
    while(idx != -1){
        idx = binarySearch(nums, target, 0, idx - 1);
        if(idx != -1)
           startIdx = idx;
    }

    let endIdx = startIdx;
    idx = startIdx;
    while(idx != -1){
        idx = binarySearch(nums, target, idx + 1, nums.length - 1);
        if(idx != -1)
           endIdx = idx;
    }

    return [startIdx, endIdx];
};

function binarySearch(nums, target, start, end){
    if(start > end) return -1;
    const midIdx = Math.floor((start + end)/2);
    if(nums[midIdx] == target) return midIdx;
    if(nums[midIdx] > target) return binarySearch(nums, target, start ,midIdx -1);
    return binarySearch(nums, target, midIdx + 1, end);
}