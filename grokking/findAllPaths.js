/*class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}*/

class Solution {
  // time: O(n*logN), space: O(n*logN) - when n is the number of nodes in the tree, time: logN when the current path is copied to the result, logN when the current path is stored per node.
  findPaths(root, sum) {
    const allPaths = [];
    const stack = [{ node: root, path: [], currentSum: 0 }];

    while (stack.length) {
      const { node, path, currentSum } = stack.pop();
      if (node.left) {
        stack.push({
          node: node.left,
          path: [...path, node.val],
          currentSum: currentSum + node.val,
        });
      }

      if (node.right) {
        stack.push({
          node: node.right,
          path: [...path, node.val],
          currentSum: currentSum + node.val,
        });
      }

      if (!node.left && !node.right && currentSum + node.val === sum) {
        path.push(node.val);
        allPaths.push(path);
      }
    }

    return allPaths;
  }
}
