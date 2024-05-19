class Solution {
  // time: O(Max(word1.length, word2.length)), space: O(n+m)
  mergeAlternately(word1, word2) {
    let result = '';
    let i = 0;
    for (; i < word1.length; i++) {
      result += word1.charAt(i);

      if (i < word2.length) {
        result += word2.charAt(i);
      }
    }

    while (i < word2.length) {
      result += word2.charAt(i);
      i++;
    }

    return result;
  }
}
