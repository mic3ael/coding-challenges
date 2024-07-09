class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  constructor() {
    this.treeDiameter = 0;
  }
  // time: O(n), space: O(n) - when the tree is the linked list
  findDiameter(root) {
    this.treeDiameter =
      this.calcHeight(root.left) + this.calcHeight(root.right) + 1;
    return this.treeDiameter;
  }
  calcHeight(node) {
    if (!node) return 0;
    return (
      Math.max(this.calcHeight(node.left), this.calcHeight(node.right)) + 1
    );
  }
}
