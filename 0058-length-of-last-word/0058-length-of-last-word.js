/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastLen = 0;
    let currentLen = 0;

    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == ' '){
            lastLen = currentLen;           
            currentLen = 0;
            while(s.charAt(i) == ' '){
                i++;
            }
            if(i >= s.length) break;
        }

        currentLen++;
    }
    
    if(currentLen) return currentLen;
    return lastLen;
};