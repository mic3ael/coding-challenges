/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let countOnes = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1)
            countOnes++;
    }

    let leftIdx = 0;
    let rightIdx = 0;
    let zeros = 0;
    let maxOnes = 0;

    while(rightIdx < nums.length){
        if(nums[rightIdx] == 0){
            zeros++;
        }


        const currentOnes = rightIdx - leftIdx - zeros;
        if(zeros > k || currentOnes > countOnes){
            if(nums[leftIdx] === 0) zeros--;
            leftIdx++;
        }

        maxOnes = Math.max(maxOnes, rightIdx - leftIdx);
        rightIdx++;
    }

    return Math.max(maxOnes, rightIdx - leftIdx);
};