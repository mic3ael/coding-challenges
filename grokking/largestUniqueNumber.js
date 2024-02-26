class Solution {
  // time: O(n), space: O(n) when n is the length of the array of numbers
  largestUniqueNumber(A) {
    let maxUnique = -1;
    const appers = new Map();

    for (let i = 0; i < A.length; i++) {
      if (!appers.has(A[i])) {
        appers.set(A[i], 0);
      }

      appers.set(A[i], appers.get(A[i]) + 1);
    }

    for (let i = 0; i < A.length; i++) {
      if (appers.get(A[i]) > 1) continue;
      maxUnique = Math.max(maxUnique, A[i]);
    }

    return maxUnique;
  }
}
