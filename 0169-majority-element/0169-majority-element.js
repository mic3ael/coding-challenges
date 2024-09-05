/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length == 1) return nums[0];
    
    nums.sort();

    let countMajorityElems = 1;
    let countCurrentElems = 1;
    let majorityElem = nums[0];
    let i = 1;
    for(; i < nums.length; i++) {
        if(nums[i] != nums[i-1]){
            if(countMajorityElems < countCurrentElems) {
                countMajorityElems = countCurrentElems;
                majorityElem = nums[i-1];
            }
            countCurrentElems = 1;
            continue;
        }

        countCurrentElems++;
    }

    if(countMajorityElems < countCurrentElems) return nums[i - 1];

    return majorityElem;
};