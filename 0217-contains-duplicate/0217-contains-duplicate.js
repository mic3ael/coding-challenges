/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const visited = new Set();
    for(const val of nums){
        if(visited.has(val)) return true;
        visited.add(val);
    }
    return false;
};