/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const result = [];
    if (!root) return result;
    const queue = [{ node: root, level: 0 }];
    while (queue.length) {
      let item;
      item = queue.shift();
      const { node, level } = item;

      if (node.left) queue.push({ node: node.left, level: level + 1 });
      if (node.right) queue.push({ node: node.right, level: level + 1 });

      if (result.length <= level) result.push([]);
      if (level % 2 === 0) {
        result[level].push(node.val);
      } else result[level].unshift(node.val);
    }

    return result;
};