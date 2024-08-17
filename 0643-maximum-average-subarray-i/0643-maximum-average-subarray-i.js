/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let leftIdx = 0;
    let rightIdx = 0;
    let maxAvg = Number.MIN_SAFE_INTEGER;
    let currentSum = 0;

    while(rightIdx < nums.length){
        const diff = rightIdx - leftIdx;
        if(diff < k){
            currentSum += nums[rightIdx];
            rightIdx++;
            continue;
        }

        maxAvg = Math.max(maxAvg, currentSum/k);
        currentSum -= nums[leftIdx];
        leftIdx++;
    }
    return Math.max(maxAvg, currentSum/k);
};