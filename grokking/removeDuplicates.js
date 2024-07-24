class Solution {
  // time: O(n), space: O(n)
  removeDuplicates(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);

      if (stack.length && c === stack[stack.length - 1]) {
        stack.pop();
        continue;
      }
      stack.push(c);
    }

    return stack.join('');
  }
}

let solution = new Solution();
console.log(solution.removeDuplicates('abccba')); // Output: ""
console.log(solution.removeDuplicates('foobar')); // Output: "fbar"
console.log(solution.removeDuplicates('abcd')); // Output: "abcd"
