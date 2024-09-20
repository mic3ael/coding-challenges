/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const visited = new Set();
    for(let num of nums){
        if(visited.has(num)) return num;
        visited.add(num);
    }
};