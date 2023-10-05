class Solution {
  // time: O(t), space(s) - where s is the length of the string, t is the length of the string
  isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const sHash = new Set(s.split(''));
    for (const char of t) if (!sHash.has(char)) return false;

    return true;
  }
}
