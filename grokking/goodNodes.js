class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  // time: O(n), space: O(h) ~ O(logN) -> when h is the high of the tree. In the worst case when the tree is not balanced it can be O(n)
  goodNodes(node) {
    return this.#dfs(node, node.val);
  }
  #dfs(node, maxVal) {
    if (!node) return 0;
    let count = node.val >= maxVal ? 1 : 0;
    maxVal = Math.max(node.val, maxVal);
    count += this.#dfs(node.left, maxVal);
    count += this.#dfs(node.right, maxVal);
    return count;
  }
}

const sol = new Solution();
const root1 = new TreeNode(
  3,
  new TreeNode(1, new TreeNode(3)),
  new TreeNode(4, new TreeNode(1), new TreeNode(5))
);
console.log(sol.goodNodes(root1)); // Expected output: 4

const root2 = new TreeNode(
  2,
  new TreeNode(3, new TreeNode(1)),
  new TreeNode(4, null, new TreeNode(5))
);
console.log(sol.goodNodes(root2)); // Expected output: 4

const root3 = new TreeNode(
  10,
  new TreeNode(8, new TreeNode(7), new TreeNode(9)),
  new TreeNode(15, new TreeNode(12), new TreeNode(20))
);
console.log(sol.goodNodes(root3)); // Expected output: 3
