class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  // time: O(n), space: O(h) - when h is the tree height
  maxDepth(node) {
    if (!node) {
      return 0;
    }
    return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + 1;
  }
}
