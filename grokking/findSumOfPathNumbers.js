/*class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}*/

class Solution {
  // time: O(n*logN), space: O(n*logN) - when n is the number of nodes in the tree, time: logN - path to num, space: logN - store path
  findSumOfPathNumbers(root) {
    let totalSum = 0;
    const stack = [{ node: root, path: '' }];

    while (stack.length) {
      const { node, path } = stack.pop();
      if (node.left) stack.push({ node: node.left, path: path + node.val });
      if (node.right) stack.push({ node: node.right, path: path + node.val });
      if (!node.left && !node.right) {
        totalSum += Number(path + node.val);
      }
    }

    return totalSum;
  }
}
