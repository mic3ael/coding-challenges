class Solution {
  // time: O(n^2), space: O(n)
  findSubarrays(arr, target) {
    const result = [];
    let leftIdx = 0;
    let product = 1;

    for (let right = 0; right < arr.length; right++) {
      product *= arr[right];

      while (product >= target && leftIdx < arr.length) {
        product /= arr[leftIdx];
        leftIdx++;
      }

      let tempList = [];

      for (let i = right; i >= leftIdx; i--) {
        tempList.unshift(arr[i]);

        result.push([...tempList]);
      }
    }

    return result;
  }
}

const s = new Solution();
console.log('findSubarrays: ', s.findSubarrays([2, 5, 3, 10], 30));
// console.log('findSubarrays: ', s.findSubarrays([8, 2, 6, 5], 50));
