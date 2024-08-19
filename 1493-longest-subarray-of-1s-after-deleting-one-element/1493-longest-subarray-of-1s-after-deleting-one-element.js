/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let leftIdx = 0;
    let rightIdx = 0;
    let zeros = 0;
    let maxOnes = 0;
    let currentMaxOnes = 0;
    let containsZeros = false;

    while(rightIdx < nums.length){
        maxOnes = Math.max(maxOnes, currentMaxOnes);
        
        if(nums[rightIdx] == 0) { 
            zeros++;
            containsZeros = true;
        }

        while(zeros > 1 && leftIdx <= rightIdx){
            if(nums[leftIdx] == 1) currentMaxOnes--;
            else if(nums[leftIdx] == 0) zeros--;
            leftIdx++;
        }


        if(nums[rightIdx] === 1) currentMaxOnes++;

        rightIdx++;
    }

    return containsZeros ? Math.max(maxOnes, currentMaxOnes) : Math.max(maxOnes, currentMaxOnes) - 1;
};