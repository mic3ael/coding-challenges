/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const appears = new Map();
    const s1Words = s1.split(' ');
    const s2Words = s2.split(' ');
    enrichAppears(appears, s1Words);
    enrichAppears(appears, s2Words);

    const result = [];

    for(let [key, value] of appears){
        if(value == 1) result.push(key);
    }

    return result;    
};

function enrichAppears(appears, words){
    for(let word of words){
        if(!appears.has(word)) 
            appears.set(word, 1);
        else
            appears.set(word, appears.get(word) + 1);
    }
}