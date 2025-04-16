/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.split(/[^a-zA-Z0-9]/g).join('').toLowerCase();
    let leftIdx = 0;
    let rightIdx = str.length - 1;

    while(leftIdx < rightIdx){
        const leftVal = str.charAt(leftIdx);
        const rightVal = str.charAt(rightIdx);
        if(leftVal !== rightVal) return false;
        leftIdx++;
        rightIdx--;
    }

    return true;
};