class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  //time: O(n), space: O(n)
  findSuccessor(root, key) {
    if (!root) return root;
    const queue = [root];
    while (queue.length) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      if (node.val === key) {
        return queue.shift();
      }
    }

    return root;
  }
}

const sol = new Solution();
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

let result = sol.findSuccessor(root, 3);
if (result) {
  console.log(result.val);
}

root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

result = sol.findSuccessor(root, 9);
if (result) {
  console.log(result.val);
}

result = sol.findSuccessor(root, 12);
if (result) {
  console.log(result.val);
}

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

result = sol.findSuccessor(root, 1);
if (result) {
  console.log(result.val);
}
