class Solution {
  // time: O(log(n)) - we are dividing each time by 2, space: O(log(n)) - when each step we push an element on the stack, there are a total of log(n) steps.
  decimalToBinary(num) {
    const stack = [];
    while (num > 0) {
      stack.push(num % 2);
      num = Math.floor(num / 2);
    }

    return stack.reverse().join('');
  }
}

// Test cases
let sol = new Solution();
console.log(sol.decimalToBinary(2)); // Output: "10"
console.log(sol.decimalToBinary(7)); // Output: "111"
console.log(sol.decimalToBinary(18)); // Output: "10010"
