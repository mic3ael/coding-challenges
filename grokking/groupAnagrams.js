class Solution {
  // time: O(n * wlog(w)), space: O(n * w) -> where n is the length of the array & w is the length of the largest item
  groupAnagrams(strs) {
    const sortedWords = [];
    const wordIndexes = new Map();
    for (let i = 0; i < strs.length; i++) {
      const sortedStr = this.sortStr(strs[i]);
      sortedWords.push(sortedStr);
      if (!wordIndexes.has(sortedStr)) wordIndexes.set(sortedStr, []);
      const indexes = wordIndexes.get(sortedStr);
      wordIndexes.set(sortedStr, [...indexes, i]);
    }
    const allAnagrams = [];
    wordIndexes.forEach((indexes) => {
      const anagrams = [];
      for (let i = 0; i < indexes.length; i++) {
        const word = strs[indexes[i]];
        anagrams.push(word);
      }
      allAnagrams.push(anagrams);
    });
    return allAnagrams;
  }
  sortStr(str) {
    return [...str].sort((a, b) => a.localeCompare(b)).join('');
  }
}

const sol = new Solution();
console.log(sol.groupAnagrams(['dog', 'god', 'hello']));
console.log(sol.groupAnagrams(['listen', 'silent', 'enlist']));
console.log(sol.groupAnagrams(['abc', 'cab', 'bca', 'xyz', 'zxy']));
