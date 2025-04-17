/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    const indexesByNum = new Map();
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(indexesByNum.has(num)) indexesByNum.get(num).push(i);
        else indexesByNum.set(num, [i]);
    }
    let result = 0;
    for(const [num, indexes] of indexesByNum){
        for(let i = 0; i < indexes.length; i++){
            for(let j = i + 1; j < indexes.length; j++){
                const calc = indexes[i] * indexes[j];
                if(calc % k === 0) {
                    result++;
                }
            }
        }
    }

    return result;
};