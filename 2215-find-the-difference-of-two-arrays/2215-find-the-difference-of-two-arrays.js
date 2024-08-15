/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    return [distinctElems(new Set(nums2), nums1), distinctElems(new Set(nums1), nums2)]
};

function distinctElems(elems, nums){
    const result = new Set();
    for(let i = 0; i < nums.length; i++){
        if(!elems.has(nums[i]))
            result.add(nums[i]); 
    }
    return Array.from(result);
}