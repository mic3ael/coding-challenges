class Solution {
  //time: O(n), space:(n)
  containsNearbyDuplicate(nums, k) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (!map.hasOwnProperty(num)) {
        map[num] = i;
      } else {
        if (i - map[num] <= k) return true;
        map[num] = i;
      }
    }

    return false;
  }
}

const solution = new Solution();
// console.log(solution.containsNearbyDuplicate([10, 20, 10, 30], 1)); // false
// console.log(solution.containsNearbyDuplicate([5, 15, 25, 5, 35], 3)); // true
// console.log(solution.containsNearbyDuplicate([7, 8, 9, 7, 10, 11], 4)); // true
console.log(solution.containsNearbyDuplicate([1, 0, 1, 1], 1));
