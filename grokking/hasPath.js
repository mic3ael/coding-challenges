/*class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}*/

class Solution {
  // time: O(n), space: O(n) -> when n is the number of nodes in the tree.
  hasPath(root, sum) {
    const stack = [{ node: root, currentSum: 0 }];

    while (stack.length) {
      const { node, currentSum } = stack.pop();
      if (node.left)
        stack.push({ node: node.left, currentSum: currentSum + node.val });
      if (node.right)
        stack.push({ node: node.right, currentSum: currentSum + node.val });
      if (!node.left && !node.right && currentSum + node.val === sum)
        return true;
    }

    return false;
  }
  // time: O(n), space: O(log n) -> when n is the number of nodes in the tree
  hasPath2(root, sum) {
    return this.dfs(root, 0, sum);
  }
  dfs(node, currentSum, targetSum) {
    if (currentSum + node.val === targetSum && !node.left && !node.right)
      return true;
    if (currentSum > targetSum) return false;

    let left;
    if (node.left) left = this.dfs(node.left, currentSum + node.val, targetSum);

    let right;
    if (node.right)
      right = this.dfs(node.right, currentSum + node.val, targetSum);

    return !!left || !!right;
  }
}
