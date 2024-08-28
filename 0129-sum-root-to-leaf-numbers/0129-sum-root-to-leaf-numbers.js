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
 * @return {number}
 */
var sumNumbers = function(root, leafSum = '') {
    leafSum = `${leafSum}${root.val}`;
    if(root.left == null && root.right == null) {
        return Number(leafSum);
    }

    let leftSum = 0;
    if(root.left)
        leftSum = sumNumbers(root.left, leafSum)

    let rightSum = 0;
    if(root.right)
       rightSum = sumNumbers(root.right, leafSum);

    return leftSum + rightSum;
};