class Solution {
  // time: O(n), space: O(logN)
  checkTree(node) {
    if (node.left && node.right && node.val === node.left.val + node.right.val)
      return true;

    let left = false;
    if (node.left) left = this.checkTree(node.left);

    let right = false;
    if (node.right) right = this.checkTree(node.right);
    return left && right;
  }
}
