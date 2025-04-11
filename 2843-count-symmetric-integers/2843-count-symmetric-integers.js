/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let currentNum = low;
    let result = 0;
    while(high >= currentNum){
        const numStr = currentNum.toString();
        if(numStr.length % 2 !== 0) {
            currentNum++;
            continue;
        };
        
        let leftSum = 0;
        let rightSum = 0;
        let leftIdx = 0;
        let rightIdx = numStr.length - 1;

        while(leftIdx < rightIdx) {
            const leftVal = parseInt(numStr.charAt(leftIdx));
            const rightVal = parseInt(numStr.charAt(rightIdx));
            rightSum += rightVal;
            leftSum += leftVal;
            leftIdx++;
            rightIdx--;
        }
        if(rightSum === leftSum) result++;
        currentNum++;
    }

    return result;
};