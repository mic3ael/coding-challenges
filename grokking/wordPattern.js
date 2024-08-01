class Solution {
  // time: O(n), space: O(n)
  wordPattern(pattern, s) {
    const words = s.split(' ');
    if (words.length != pattern.length) return false;
    const cWord = {};
    const wordC = {};
    for (let i = 0; i < pattern.length; i++) {
      const c = pattern.charAt(i);
      if (!cWord.hasOwnProperty(c)) cWord[c] = words[i];
      else if (words[i] !== cWord[c]) return false;

      if (!wordC.hasOwnProperty(words[i])) wordC[words[i]] = c;
      else if (c !== wordC[words[i]]) return false;
    }
    return true;
  }
}

const solution = new Solution();
// Example 1
// console.log(solution.wordPattern('eegg', 'dog dog cat cat')); // true
// Example 2
// console.log(solution.wordPattern('abca', 'one two three four')); // false
// Example 3
// console.log(solution.wordPattern('abacac', 'dog cat dog mouse dog mouse')); // true
console.log(solution.wordPattern('abc', 'dog cat dog'));
