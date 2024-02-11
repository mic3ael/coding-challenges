/*class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}*/

class Solution {
  // time: O(n), space: O(n) - when n is the number of nodes in the tree.
  traverse(root) {
    let result = []; // Array<number>
    const queue = [{ node: root, depth: 0 }];
    while (queue.length) {
      const { node, depth } = queue.pop();
      if (node.right) queue.unshift({ node: node.right, depth: depth + 1 });
      if (node.left) queue.unshift({ node: node.left, depth: depth + 1 });
      if (result.length <= depth) {
        result.push(node.val);
      }
    }
    return result;
  }
}
