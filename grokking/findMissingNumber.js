class Solution {
  // Time: O(n), space: O(1)
  findMissingNumber(arr) {
    let sum = 0;
    for (let i = 1; i <= arr.length + 1; i++) {
      sum = sum ^ i;
    }

    let arrSum = 0;

    for (let i = 0; i < arr.length; i++) {
      arrSum ^= arr[i];
    }

    return sum ^ arrSum;
  }
}

const s = new Solution();
s.findMissingNumber([1, 5, 2, 6, 4]);
