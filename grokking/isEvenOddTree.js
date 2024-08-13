// class TreeNode {
//     constructor(val = 0, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

class Solution {
  // time: O(n), space: O(n)
  isEvenOddTree(root) {
    if (root == null) return true;
    const queue = [root];
    let nodesInLevel = 1;
    let currentLevel = 1;
    let prevVal = null;
    while (queue.length) {
      if (nodesInLevel < 1) {
        nodesInLevel = queue.length;
        currentLevel++;
        prevVal = null;
      }

      const node = queue.shift();
      nodesInLevel--;

      if (currentLevel % 2 == 0 && node.val % 2 != 0) return false;
      else if (currentLevel % 2 != 0 && node.val % 2 == 0) return false;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      if (prevVal == null) {
        prevVal = node.val;
        continue;
      }

      if (currentLevel % 2 == 0 && node.val >= prevVal) return false;
      else if (currentLevel % 2 != 0 && node.val <= prevVal) return false;
    }
    return true;
  }
}
