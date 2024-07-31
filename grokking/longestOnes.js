class Solution {
  //time: O(n), space: O(1)
  longestOnes(nums, k) {
    let startIdx = 0;
    let endIdx = 0;
    let numberOfZeros = 0;
    let longest = 0;

    while (endIdx < nums.length) {
      if (nums[endIdx] === 0) {
        numberOfZeros++;
      }

      while (numberOfZeros > k) {
        if (nums[startIdx] === 0) {
          numberOfZeros--;
        }
        startIdx++;
      }

      longest = Math.max(longest, endIdx - startIdx + 1);
      endIdx++;
    }

    return longest;
  }
}

const sol = new Solution();
console.log(sol.longestOnes([1, 0, 0, 1, 1, 0, 1, 1], 2)); // 6
console.log(sol.longestOnes([1, 0, 1, 1, 0, 0, 1, 1], 1)); // 4
console.log(sol.longestOnes([1, 0, 0, 1, 1, 0, 1], 3)); // 7
