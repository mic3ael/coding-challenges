class Solution {
  // time: O(n^2), space: O(1), when n is the length of the arr. In a case when argument array can be mutated during sort algorithm.
  searchTriplet(arr, targetSum) {
    let closestNumber = Number.MAX_VALUE;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      let leftIdx = i + 1;
      let rightIdx = arr.length - 1;
      let pivot = arr[i];

      while (leftIdx < rightIdx) {
        const sum = pivot + arr[leftIdx] + arr[rightIdx];
        const diffSum = Math.abs(targetSum - sum);
        const diffClosest = Math.abs(targetSum - closestNumber);
        if (diffClosest === diffSum)
          closestNumber = Math.min(closestNumber, sum);
        if (diffClosest > diffSum) closestNumber = sum;
        if (sum < targetSum) leftIdx++;
        else if (sum > targetSum) rightIdx--;
        else {
          leftIdx++;
          rightIdx--;
        }
      }
    }

    return closestNumber;
  }
}
