class Solution {
  // time: O(n + m), space: O(1)
  compare(str1, str2) {
    let str1Idx = str1.length - 1;
    let str2Idx = str2.length - 1;
    while (str1Idx >= 0 || str2Idx >= 0) {
      str1Idx = this.getNextValidCharIdx(str1, str1Idx);
      str2Idx = this.getNextValidCharIdx(str2, str2Idx);

      if (str1Idx < 0 && str2Idx < 0) {
        return true;
      }

      if (str1Idx < 0 || str2Idx < 0) return false;

      if (str1.charAt(str1Idx) !== str2.charAt(str2Idx)) {
        return false;
      }

      str1Idx--;
      str2Idx--;
    }

    return true;
  }
  getNextValidCharIdx(str, strIdx) {
    let backspaces = 0;
    while (strIdx >= 0) {
      if (str[strIdx] === '#') {
        backspaces++;
      } else if (backspaces > 0) backspaces--;
      else break;

      strIdx--;
    }

    return strIdx;
  }
  // time: O(n + m), space: O(n + m)
  compare2(str1, str2) {
    return this.normalizeStr2(str1) === this.normalizeStr2(str2);
  }
  normalizeStr2(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) != '#') {
        stack.push(str.charAt(i));
      } else {
        stack.pop();
      }
    }

    return stack.join('');
  }
}

const sol = new Solution();
console.log(sol.compare('xy#z', 'xzz#')); //true
console.log(sol.compare('xy#z', 'xyz#')); // false
console.log(sol.compare('xp#', 'xyz##')); // true
console.log(sol.compare('xywrrmp', 'xywrrmu#p')); // true
console.log(sol.compare('ab##', 'c#d#')); // true
console.log(sol.compare('xy#z##', 'xyz###')); // true
