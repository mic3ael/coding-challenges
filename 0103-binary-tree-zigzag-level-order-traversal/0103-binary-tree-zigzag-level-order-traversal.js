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
var zigzagLevelOrder = function (root) {
    const result = [];
    if (!root) return result;

    const queue = [root];
    let currentLevel = 1;
    let nodesLevel = 1;

    while (queue.length) {
        
        const node = queue.shift();
        nodesLevel--;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        if (result.length <= currentLevel - 1) result.push([]);
        if (currentLevel % 2 === 1) {
            result[currentLevel - 1].push(node.val);
        } else result[currentLevel - 1].unshift(node.val);

        if (nodesLevel == 0) {
            nodesLevel = queue.length;
            currentLevel++;
        }
    }

    return result;
};