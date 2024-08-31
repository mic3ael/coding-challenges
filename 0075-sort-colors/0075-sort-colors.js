/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const counts = new Array(3).fill(0);
    for(let i = 0; i < nums.length; i++){
        counts[nums[i]] += 1;
    }

    let currentIdx = 0;
    for(let i = 0; i < nums.length; i++){
        while(counts[currentIdx] == 0) {
            currentIdx++;
        }
        
        nums[i] = currentIdx;
        counts[currentIdx] -= 1;
    }
};