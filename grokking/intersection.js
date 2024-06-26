class Solution {
  // time: O(n + m + k), space: O(n+k), n - nums1, m - nums2, k - result
  intersection(nums1, nums2) {
    const nums1Values = new Set(nums1);

    const result = new Set();

    for (let i = 0; i < nums2.length; i++) {
      if (nums1Values.has(nums2[i])) {
        result.add(nums2[i]);
      }
    }

    return Array.from(result);
  }
}
