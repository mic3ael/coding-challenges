class Solution {
  //time: O(n), space: O(1) -> the number of english letters are constant
  closeStrings(word1, word2) {
    if (word1.length !== word2.length) return false;

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    for (let i = 0; i < word1.length; i++) {
      const postion1 = word1[i].charCodeAt(0) % 96;
      count1[postion1 - 1] += 1;
      const postion2 = word2[i].charCodeAt(0) % 96;
      count2[postion2 - 1] += 1;
    }

    for (let i = 0; i < count1.length; i++) {
      if (count1[i] !== count2[i]) return false;
    }

    return true;
  }
}

let sol = new Solution();

// Example 1
console.log(sol.closeStrings('aacbbc', 'bbcaca')); // true

// Example 2
console.log(sol.closeStrings('xxyyzz', 'zzxxyy')); // true

// Example 3
console.log(sol.closeStrings('aabbcc', 'aabbc')); // false
