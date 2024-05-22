class Solution {
  // time: O(n^2), space: O(1)
  reverseWords(s) {
    let left = 0;
    let right = s.length - 1;

    this.swap(s, left, right);

    left = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] !== ' ') continue;
      right = i - 1;
      this.swap(s, left, i - 1);
      left = i + 1;
    }

    this.swap(s, left, s.length - 1);
    return s;
  }

  swap(s, left, right) {
    while (left < right) {
      const temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      left++;
      right--;
    }
  }
}

const s = new Solution();
s.reverseWords(['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
