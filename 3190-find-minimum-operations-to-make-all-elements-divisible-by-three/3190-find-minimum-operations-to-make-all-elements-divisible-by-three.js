/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let numberOfActions = 0;
    for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        if(num % 3 == 0) continue;
        numberOfActions++;
    }
    return numberOfActions;
};