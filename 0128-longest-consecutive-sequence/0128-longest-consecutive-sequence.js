/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const lookup = new Set(nums);
    let result = 0;
    for(const num of nums){
        const prev = num - 1;
        if(lookup.has(prev)) continue;
        let next = num + 1;
        let count = 1;
        while(lookup.has(next)) {
            lookup.delete(next);
            next = next + 1;
            count++;
        }

        result = Math.max(result, next - num);
    }

    return result;
};