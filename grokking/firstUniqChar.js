class Solution {
  // time: O(n), space: O(1) - only English letters so O(1)
  firstUniqChar(s) {
    const appers = new Map();
    // init
    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);
      if (!appers.has(c)) {
        appers.set(c, 0);
      }

      appers.set(c, appers.get(c) + 1);
    }
    // find the right index
    for (let i = 0; i < s.length; i++) {
      if (appers.get(s.charAt(i)) === 1) return i;
    }

    return -1;
  }
}
