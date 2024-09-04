/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const occurs = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(!occurs.has(nums[i])) occurs.set(nums[i], []);
        const indexes = occurs.get(nums[i]);
        indexes.push(i);
        if(indexes.length < 2) continue;
    
        for(let i = 1; i < indexes.length; i++){
            if(Math.abs(indexes[i-1] - indexes[i]) <= k) return true;
        }
    }
    
    return false;
};