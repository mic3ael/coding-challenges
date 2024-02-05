class Solution {
  // time: O(n + m) - when n is the length of note, space: O(1) - English alphabet has a fixed number of characters.
  canConstruct(ransomNote, magazine) {
    const letters = new Map();
    for (let i = 0; i < magazine.length; i++) {
      const char = magazine.charAt(i);
      if (!letters.has(char)) {
        letters.set(char, 1);
        continue;
      }

      letters.set(char, letters.get(char) + 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
      const char = ransomNote.charAt(i);
      if (!letters.has(char) || letters.get(char) <= 0) return false;
      letters.set(char, letters.get(char) - 1);
    }

    return true;
  }
}
