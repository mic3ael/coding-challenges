/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const lookup = new Set(nums);
    let result = 0;
    for(let num of nums){
        const prev = num - 1;
        if(lookup.has(prev)) continue;
        let length = 0;
        while(lookup.has(num + length)) {
            lookup.delete(num + length);
            length++;
        }
        result = Math.max(result, length);
    }

    return result;
};