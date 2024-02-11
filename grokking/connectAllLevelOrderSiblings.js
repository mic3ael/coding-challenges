/*class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}*/

class Solution {
  // time: O(n), space: O(n) - where n is the number of nodes in the tree.
  connect(root) {
    const queue = [root];
    let prevNode = null;

    while (queue.length) {
      const node = queue.pop();
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
      if (prevNode) prevNode.next = node;
      prevNode = node;
    }

    return root;
  }
}
