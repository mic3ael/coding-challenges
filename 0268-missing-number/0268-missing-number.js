/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sumUptoN = 0;
    while(n > 0){
        sumUptoN += n;
        n--; 
    }

    let inputSum = 0;
    for(let i = 0; i < nums.length; i++){
        inputSum += nums[i];
    }

    return sumUptoN - inputSum;
};