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
 * @return {number[]}
 */
var rightSideView = function(root, level = 0, visitedLevels = new Set(), result = []) {
    if(root == null) return result;
    
    if(!visitedLevels.has(level))
        result.push(root.val);
    visitedLevels.add(level);
    rightSideView(root.right, level+1, visitedLevels, result);
    rightSideView(root.left, level+1, visitedLevels, result);
    return result;
};