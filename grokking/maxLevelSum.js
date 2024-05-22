class TreeNode {
  constructor(val) {
    this.val = val; // Value of the node
    this.left = null; // Pointer to the left child node
    this.right = null; // Pointer to the right child node
  }
}

class Solution {
  // time: O(n), space: O(n) -> when the tree is unbalanced (all nodes are on side of the tree)
  maxLevelSum(root) {
    const queue = [{ node: root, level: 0 }];
    const result = [];

    while (queue.length) {
      const { node, level } = queue.shift();

      if (result.length < level + 1) result.push(node.val);
      else result[level] += node.val;

      if (node.left) {
        queue.push({ node: node.left, level: level + 1 });
      }

      if (node.right) {
        queue.push({ node: node.right, level: level + 1 });
      }
    }

    let max = Number.MIN_SAFE_INTEGER;
    let maxIdx = -1;
    for (let i = 0; i < result.length; i++) {
      if (max >= result[i]) continue;

      max = result[i];
      maxIdx = i;
    }

    return maxIdx + 1;
  }
}

const solution = new Solution(); // Create an instance of the Solution class

// Example 1
const root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);
console.log(solution.maxLevelSum(root1)); // Output: 2

// Example 2
const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.right = new TreeNode(7);
console.log(solution.maxLevelSum(root2)); // Output: 3

// Example 3
const root3 = new TreeNode(-10);
root3.left = new TreeNode(20);
root3.left.left = new TreeNode(15);
root3.left.right = new TreeNode(25);
console.log(solution.maxLevelSum(root3)); // Output: 3
