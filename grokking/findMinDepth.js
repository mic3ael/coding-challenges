/*class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}*/

class Solution {
  // time: O(n), space: O(n) - when n is the number of nodes in the tree.
  findDepth(root) {
    let minimumTreeDepth = Number.MAX_SAFE_INTEGER;
    const queue = [{ node: root, depth: 1 }];
    while (queue.length) {
      const { node, depth } = queue.pop();
      if (node.left) queue.unshift({ node: node.left, depth: depth + 1 });
      if (node.right) queue.unshift({ node: node.right, depth: depth + 1 });
      if (!node.left && !node.right)
        minimumTreeDepth = Math.min(minimumTreeDepth, depth);
    }
    return minimumTreeDepth;
  }
}
