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
    if (!root) return result;
    const queue = [{ node: root, level: 0 }];
    while (queue.length) {
      const { node, level } = queue.shift();
      if (result.length <= level) result.push([node.val]);
      else result[level].push(node.val);
      if (node.left) queue.push({ node: node.left, level: level + 1 });
      if (node.right) queue.push({ node: node.right, level: level + 1 });
    }
    return result;
  }
}
