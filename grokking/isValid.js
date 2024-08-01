const closeParentheses = new Set(['}', ')', '>', ']']);
const parentheses = {
  '}': '{',
  ')': '(',
  '>': '<',
  ']': '[',
};

class Solution {
  //time: O(n), space: O(n)
  isValid(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);
      if (closeParentheses.has(c)) {
        if (stack.pop() !== parentheses[c]) return false;
      } else stack.push(c);
    }

    return !stack.length;
  }
}

let solution = new Solution();
// console.log(solution.isValid('(]')); // false
console.log(solution.isValid('{[]}')); // true
// console.log(solution.isValid('[{]}')); // false
