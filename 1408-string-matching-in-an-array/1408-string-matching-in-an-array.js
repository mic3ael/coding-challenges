/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
   const result = [];
   for(let i = 0; i < words.length; i++){
        const word = words[i];
        for(const w of words) {
            if(w === word) continue;
            if(w.includes(word)){
                result.push(word);
                break;
            }
        }
        
   }
   return result;
};