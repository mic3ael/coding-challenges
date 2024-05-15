class Solution {
    
  // time: O(n), space: O(n) -> where n is the length of the input arr.
  search(arr, targetSum) {
    const visited = new Map();

    for (let i = 0; i < arr.length; i++) {
      if (!visited.has(arr[i])) visited.set(arr[i], i);
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited.has(targetSum - arr[i])) {
        const idx = visited.get(targetSum - arr[i]);
        if (idx == i) continue;
        return [idx, i];
      }
    }

    return [-1, -1];
  }
}
