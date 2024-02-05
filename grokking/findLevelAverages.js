/*class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}*/

class Solution {
  // time: O(n), space: O(n) - number of elements in the queue.
  findLevelAverages(root) {
    const result = [];

    if (!root) return result;

    const queue = [{ node: root, level: 0 }];
    let sumLevel = 0;
    let countLevel = 0;
    let currentLevel = 0;

    while (queue.length) {
      const { node, level } = queue.shift();
      if (currentLevel !== level) {
        // refresh
        currentLevel = level;
        sumLevel = 0;
        countLevel = 0;
      }

      sumLevel += node.val;
      countLevel++;
      result[level] = sumLevel / countLevel;

      if (node.left) queue.push({ node: node.left, level: level + 1 });
      if (node.right) queue.push({ node: node.right, level: level + 1 });
    }

    return result;
  }
}
