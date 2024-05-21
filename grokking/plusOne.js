class Solution {
  // time: O(n), space: O(1)
  plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      const lastDigit = digits[i];
      if ((lastDigit + 1) % 10 != 0) {
        digits[i] = lastDigit + 1;
        break;
      }

      digits[i] = 0;
    }

    if (digits[0] == 0) {
      digits.unshift(1);
    }

    return digits;
  }
}

const s = new Solution();
console.log(s.plusOne([1, 2, 3]));
console.log(s.plusOne([4, 9, 9, 9]));
console.log(s.plusOne([9, 9, 9, 9]));
