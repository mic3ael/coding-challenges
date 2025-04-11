/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const idxByWord = new Map();
    for(let i = 0; i < strs.length; i++) {
        const word = strs[i];
        const sortedWord = word.split('').sort().join();
        if(!idxByWord.has(sortedWord)) idxByWord.set(sortedWord, [i]); 
        else idxByWord.get(sortedWord).push(i);
    }
    
    const result = [];
    for(const [_, indexes] of idxByWord) {
        const currentResult = [];
        for(const idx of indexes){
            const word = strs[idx];
            currentResult.push(word);
        }
        result.push(currentResult);
    }

    return result;
};