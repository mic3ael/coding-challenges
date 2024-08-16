/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const leftToRight = [1];
    const rightToLeft = [1];

    for(let i = 0; i < nums.length - 1; i++){
        leftToRight.push(leftToRight[i] * nums[i]);
    }

    for(let i = nums.length - 1; i > 0; i--){
        rightToLeft.unshift(rightToLeft[0] * nums[i]);
    }

    const result = [];
    for(let i = 0; i < leftToRight.length; i++){
        result.push(leftToRight[i] * rightToLeft[i]);
    }
    return result;
};