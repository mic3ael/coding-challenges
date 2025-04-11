/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false;

    const countByChar = new Map();
    for(let i = 0; i < s.length; i++){
        const char = s.charAt(i);
        if(!countByChar.has(char)) countByChar.set(char, 1);
        else countByChar.set(char, countByChar.get(char) + 1);
    }
    
    for(let i = 0; i < t.length; i++){
        const char = t.charAt(i);
        if(!countByChar.has(char)) return false;
        const currentCount = countByChar.get(char);
        if(currentCount === 0) return false; 
        countByChar.set(char, currentCount - 1);
    }

    return true;
};