class Solution {
  // time: O(n), space: O(n)
  findBuildings(heights) {
    let result = [];
    let highestBuild = -1;

    for (let i = heights.length - 1; i >= 0; i--) {
      if (highestBuild >= heights[i]) continue;
      result.push(i);
      highestBuild = heights[i];
    }

    let left = 0;
    let right = result.length - 1;

    while (left < right) {
      const temp = result[left];
      result[left] = result[right];
      result[right] = temp;
      left++;
      right--;
    }

    return result;
  }
}

const s = new Solution();

console.log(s.findBuildings([7, 4, 3, 2, 1, 4, 6, 3]));
