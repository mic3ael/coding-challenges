/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const leftToRight = [1];
    const rightToLeft = [1];

    let i = 0;

    while(i < nums.length - 1){
        leftToRight.push(leftToRight[i] * nums[i]);
        rightToLeft.unshift(rightToLeft[0] * nums[nums.length -1 - i]);
        i++;
    }

    const result = [];
    for(let i = 0; i < leftToRight.length; i++){
        result.push(leftToRight[i] * rightToLeft[i]);
    }
    return result;
};