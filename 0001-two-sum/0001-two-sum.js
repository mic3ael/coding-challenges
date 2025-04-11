/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const rests = new Map();
    for(let i = 0; i < nums.length; i++){
        const val = nums[i];
        const rest = target - val;
        if(rests.has(rest)) return [rests.get(rest), i];
        rests.set(val,i);
    }
};