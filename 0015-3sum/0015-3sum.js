/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    const unique = new Set();
    for(let i = 0; i < nums.length; i++){
        const target = nums[i];
        let leftIdx = i + 1;
        let rightIdx = nums.length - 1;
        while(leftIdx < rightIdx){
            const leftVal = nums[leftIdx];
            const rightVal = nums[rightIdx];
            const sum = target + leftVal + rightVal;
            if(sum === 0) unique.add(`${target}:${leftVal}:${rightVal}`);
            if(sum >= 0) rightIdx--;
            else leftIdx++;
        }
    }
    const result = [];
    for(const u of unique){
        const r = u.split(':').map(Number);
        result.push(r);
    }
    return result;
};