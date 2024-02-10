/*class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }*/

class Solution {
  // time: O(n), space: O(n)
  traverse(root) {
    const result = [];
    const queue = [{ node: root, level: 0 }];
    let prevLevel = 0;
    let levelResult = [];
    while (queue.length) {
      const { node, level } = queue.pop();
      if (node.left) queue.unshift({ node: node.left, level: level + 1 });
      if (node.right) queue.unshift({ node: node.right, level: level + 1 });

      if (prevLevel !== level) {
        result.unshift(levelResult);
        prevLevel = level;
        levelResult = [];
      }

      levelResult.push(node.val);
    }

    if (levelResult.length) result.unshift(levelResult);

    return result;
  }
}
