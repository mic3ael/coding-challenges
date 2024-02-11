// class TreeNode {
//   constructor(x) {
//     this.val = x;
//     this.left = this.right = this.next = null;
//   }
// }

class Solution {
  // time: O(n), space: O(n) - when n is the number of nodes in the tree.
  connect(root) {
    const queue = [{ node: root, depth: 0 }];
    let prevNode = null;
    let prevDepth = -1;

    while (queue.length) {
      const { node, depth } = queue.pop();
      if (node.left) queue.unshift({ node: node.left, depth: depth + 1 });
      if (node.right) queue.unshift({ node: node.right, depth: depth + 1 });

      if (prevDepth === depth) {
        prevNode.next = node;
        prevNode = node;
      } else {
        prevNode = node;
        prevDepth = depth;
      }
    }

    return root;
  }
}
