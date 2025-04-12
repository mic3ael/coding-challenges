
function calc(nums){
    const calcArr = [1];
    
    return calcArr;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const preCalc = [1];
    for(let i = 0; i < nums.length - 1; i++){
        const mul = preCalc[preCalc.length - 1];
        preCalc.push(mul * nums[i]);
    }

    const postCalc = [1];
    for(let i = nums.length - 1; i > 0; i--){
        const mul = postCalc[0];
        postCalc.unshift(mul * nums[i]);
    }
    
    const result = [];
    for(let i = 0; i < preCalc.length; i++){
        const pre = preCalc[i];
        const post = postCalc[i];
        result.push(pre * post);
    }
    return result;
};