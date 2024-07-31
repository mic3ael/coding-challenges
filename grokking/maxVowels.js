class Solution {
  //time: O(n), space: O(1)
  maxVowels(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let startIdx = 0;
    let endIdx = 0;
    let maxVowels = 0;
    let currentVowels = 0;

    while (endIdx < s.length) {
      maxVowels = Math.max(maxVowels, currentVowels);

      if (vowels.has(s.charAt(endIdx))) {
        currentVowels++;
      }

      if (k > endIdx) {
        endIdx++;
        continue;
      }

      if (vowels.has(s.charAt(startIdx))) currentVowels--;
      startIdx++;
      endIdx++;
    }

    return Math.max(maxVowels, currentVowels);
  }
}

// Testing the function
const solution = new Solution();
console.log(solution.maxVowels('azerdii', 4)); // Output: 2
console.log(solution.maxVowels('abcde', 2)); // Output: 1
console.log(solution.maxVowels('zaeixoyuxyz', 7)); // Output: 5
