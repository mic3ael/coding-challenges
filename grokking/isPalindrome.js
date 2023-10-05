class Solution {
  // time: O(n), space: O(1)
  isPalindrome(s) {
    let startIdx = 0;
    let endIdx = s.length - 1;
    while (startIdx < endIdx) {
      const leftChar = s.charAt(startIdx).toLowerCase();
      const rightChar = s.charAt(endIdx).toLowerCase();

      if (!this.#isInRange(leftChar) || !this.#isInRange(rightChar)) {
        if (!this.#isInRange(leftChar)) startIdx++;
        if (!this.#isInRange(rightChar)) endIdx--;
        continue;
      }

      if (leftChar !== rightChar) return false;
      startIdx++;
      endIdx--;
    }
    return true;
  }
  #isInRange(char) {
    const code = char.charCodeAt(0);
    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
  }
}
