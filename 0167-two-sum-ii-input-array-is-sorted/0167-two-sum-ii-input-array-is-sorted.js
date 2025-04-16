/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let leftIdx = 0;
    let rightIdx = numbers.length - 1;
    while(leftIdx < rightIdx){
        const leftVal = numbers[leftIdx];
        const rightVal = numbers[rightIdx];
        const sum = leftVal + rightVal;
        if(sum === target) return [leftIdx + 1, rightIdx + 1];
        if(sum > target) rightIdx--;
        else leftIdx++;
    }

    return [-1, -1];
};