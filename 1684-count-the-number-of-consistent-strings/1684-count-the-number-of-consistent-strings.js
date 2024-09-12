/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    allowed = new Set(allowed);
    let result = 0;
    
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        let allow = true;
        for(let j = 0; j < word.length; j++){
            if(!allowed.has(word.charAt(j))) {
                allow = false;
                break;
            }
        }
        if(allow) result++;
    }

    return result;
};