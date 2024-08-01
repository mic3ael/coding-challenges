class Solution {
  //time: O(n), space: O(1)
  longestSubarray(nums) {
    let startIdx = 0;
    let endIdx = 0;
    let irrelevantElements = 0;
    let longest = 0;

    while (nums.length > endIdx) {
      if (nums[endIdx] != 1) {
        irrelevantElements++;
      }

      while (irrelevantElements > 1) {
        if (nums[startIdx] == 0) irrelevantElements--;
        startIdx++;
        continue;
      }

      longest = Math.max(longest, endIdx - startIdx);
      endIdx++;
    }

    return longest;
  }
}

const sol = new Solution();
console.log(sol.longestSubarray([1, 1, 0, 0, 1, 1])); // Output: 2
// console.log(sol.longestSubarray([1, 1, 0, 1, 1, 1])); // Output: 5
// console.log(sol.longestSubarray([1, 0, 1, 1, 0, 1])); // Output: 3
