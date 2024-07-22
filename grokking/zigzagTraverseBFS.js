class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  traverse(root) {
    const result = [];
    if (!root) return result;
    const queue = [{ node: root, level: 0 }];
    let prevLevel = 0;
    while (queue.length) {
      let item;
      if (prevLevel % 2 === 0) item = queue.shift();
      else item = queue.pop();
      const { node, level } = item;
      if (level % 2 === 0) {
        if (node.right) queue.push({ node: node.right, level: level + 1 });
        if (node.left) queue.push({ node: node.left, level: level + 1 });
      } else {
        if (node.left) queue.push({ node: node.left, level: level + 1 });
        if (node.right) queue.push({ node: node.right, level: level + 1 });
      }
      if (result.length <= level) result.push([]);
      result[level].push(node.val);
      prevLevel = level;
    }

    return result;
  }
}

const sol = new Solution();
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${sol.traverse(root)}`);
