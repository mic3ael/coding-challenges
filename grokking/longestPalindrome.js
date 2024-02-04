class Solution {
  // time: O(n), space: O(n)
  longestPalindrome(s) {
    let length = 0;
    const visited = new Map();

    // populate hash with frequencies
    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);
      if (!visited.has(c)) {
        visited.set(c, 1);
      } else {
        visited.set(c, visited.get(c) + 1);
      }
    }

    let isOdd = false;
    visited.forEach((frequency) => {
      if (frequency % 2 === 0) length += frequency;
      else {
        length += frequency - 1;
        isOdd = true;
      }
    });

    if (isOdd) length++;

    return length;
  }
}
