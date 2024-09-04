/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const occurs = new Map();
    for(let i = 0; i < nums.length; i++) {
        
        if(!occurs.has(nums[i])) {
            occurs.set(nums[i], [i]);
            continue; 
        }

        const indexes = occurs.get(nums[i]);
        if(i - indexes[indexes.length-1] <= k) return true;
        indexes.push(i);
    }
    
    return false;
};