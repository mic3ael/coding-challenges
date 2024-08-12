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
var rightSideView2 = function(root, level = 0, result = []) {
    if(root == null) return result;
    
    if(result.length < level + 1)
        result.push(root.val);
    rightSideView2(root.right, level+1, result);
    rightSideView2(root.left, level+1, result);
    return result;
};

var rightSideView = function(root) {
    const result = [];
    if(root == null) return result;
    const queue = [root];
    let nodesInTheLevel = 1;
    let currentLevel = 0;
    while(queue.length){
        const node = queue.shift();
        nodesInTheLevel--;
        if(node.right)
            queue.push(node.right);
        if(node.left)
            queue.push(node.left);
        
        if(result.length < currentLevel + 1)
            result.push(node.val);
        
        if(nodesInTheLevel == 0) {
            nodesInTheLevel = queue.length;
            currentLevel++;
        }
        
    }

    return result;
};