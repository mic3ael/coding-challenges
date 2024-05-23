class Solution {
  // time: O(n), space: O(1) -> creating countArr with length of 10(constant)
  largestPalindromic(num) {
    const countArr = Array(10).fill(0);
    for (let i = 0; i < num.length; i++) {
      const n = Number(num.charAt(i));
      countArr[n]++;
    }

    let result = Array(num.length);
    let leftIdx = 0;
    let rightIdx = result.length - 1;
    for (let i = countArr.length - 1; i >= 0; i--) {
      while (countArr[i] > 1) {
        if (leftIdx === 0 && i === 0) break;
        result[leftIdx] = result[rightIdx] = i;
        leftIdx++;
        rightIdx--;
        countArr[i] -= 2;
      }
    }

    let idx = countArr.length - 1;
    while (idx >= 0) {
      if (countArr[idx] > 0) {
        result[leftIdx] = idx;
        break;
      }
      idx--;
    }
    return Number(result.join('')).toString();
  }
}

const s = new Solution();

console.log(s.largestPalindromic('323211444')); // 432141234
console.log(s.largestPalindromic('444947137')); // 7449447
console.log(s.largestPalindromic('998877')); // 987789
console.log(s.largestPalindromic('9876543210')); // 9
console.log(s.largestPalindromic('121212')); // 21212
console.log(s.largestPalindromic('00009')); // 9
console.log(s.largestPalindromic('282273898509619829360')); // 9988632207022368899
