class Solution {
  // time: O(n), space: O(n)
  nextGreaterElement(nums1, nums2) {
    const stack = [];
    const nextGreaterElement = new Map();
    for (let i = 0; i < nums2.length; i++) {
      while (stack.length && nums2[i] > stack[stack.length - 1]) {
        const key = stack.pop();
        nextGreaterElement.set(key, nums2[i]);
      }
      stack.push(nums2[i]);
    }

    while (stack.length) {
      const key = stack.pop();
      nextGreaterElement.set(key, -1);
    }

    const result = [];
    for (let i = 0; i < nums1.length; i++) {
      result.push(nextGreaterElement.get(nums1[i]));
    }
    return result;
  }
}

let solution = new Solution();
let nums1 = [4, 2, 6];
let nums2 = [6, 2, 4, 5, 3, 7];
console.log(solution.nextGreaterElement(nums1, nums2));
