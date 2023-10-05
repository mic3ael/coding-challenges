class Solution {
    // time: O(n), space(1) - where n is the length of the string, regarding space english alphabet has 26 letters.
    checkIfPangram(sentence) {
      const hash = new Set();
      for(const char of sentence.toLowerCase()){
        const asciiCode = Number(char.charCodeAt(0));
        if(asciiCode >= 97 && asciiCode <= 122) hash.add(char);
      }
      
      return hash.size === 26;
    }
  }