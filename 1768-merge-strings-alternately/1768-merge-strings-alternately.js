/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0;
    let j = 0;
    let result = "";
    while(i < word1.length && j < word2.length){
        if((i+j)%2 == 0){
            result += word1.charAt(i);
            i++;
        } else {
            result += word2.charAt(j);
            j++;
        }
    }

    while(i < word1.length){
        result += word1.charAt(i);
        i++;
    }

    while(j < word2.length){
        result += word2.charAt(j);
        j++;
    }

    return result;
};