class Solution {
  // time: O(n), space: O(n)
  containsDuplicate(nums) {
    const hash = new Set();
    for (const num of nums) {
      if (hash.has(num)) return true;
      hash.add(num);
    }
    return false;
  }
}
