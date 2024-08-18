
const vowels = new Set(['a','e','i','o','u']);

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let leftIdx = 0;
    let rightIdx = 0;
    let maxSeqVowels = 0;
    let currentVowels = 0;
    
    while(rightIdx < s.length){
        if(rightIdx - leftIdx >= k){
            if(vowels.has(s.charAt(leftIdx)))
                currentVowels--;
            leftIdx++;
        }
        
        if(vowels.has(s.charAt(rightIdx))){
            currentVowels++;
        }

        maxSeqVowels = Math.max(maxSeqVowels, currentVowels);
        rightIdx++;
    }

    return maxSeqVowels;
};