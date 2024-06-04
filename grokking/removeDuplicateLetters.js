class Solution {
  // time: O(n), space: O(1)
  removeDuplicateLetters(s) {
    const count = new Map();
    const visited = new Set();
    const result = [];

    for (let c of s) {
      if (!count.has(c)) count.set(c, 0);
      count.set(c, count.get(c) + 1);
    }

    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
      if (visited.has(char)) {
        count.set(char, count.get(char) - 1);
        continue;
      }

      while (
        result.length &&
        char < result[result.length - 1] &&
        count.get(result[result.length - 1]) > 0
      ) {
        visited.delete(result.pop());
      }
      result.push(char);
      visited.add(char);
      count.set(char, count.get(char) - 1);
    }

    return result.join('');
  }
}

let sol = new Solution();
console.log(sol.removeDuplicateLetters('bbaac')); // Output: "bac"
console.log(sol.removeDuplicateLetters('zabccde')); // Output: "zabcde"
console.log(sol.removeDuplicateLetters('mnopmn')); // Output: "mnop"
