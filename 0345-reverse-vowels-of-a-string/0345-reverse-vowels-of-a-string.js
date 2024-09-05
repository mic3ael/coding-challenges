const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let leftIdx = 0;
    let rightIdx = s.length - 1;
    s = s.split('');
    while(leftIdx < rightIdx){
        while(leftIdx < s.length && !vowels.has(s[leftIdx])){
            leftIdx++;
        }
        
        while(rightIdx >= 0 && !vowels.has(s[rightIdx])){
            rightIdx--;
        }

        if(leftIdx >= rightIdx) break;

        const temp = s[leftIdx];
        s[leftIdx] = s[rightIdx];
        s[rightIdx] = temp;
        leftIdx++;
        rightIdx--;
    }

    return s.join('');
};