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
var largestValues = function(root) {
    const result = [];
    if(root == null) return result;
    const queue = [ root ];
    let levelNodes = 1;
    let levelMax = -Infinity;
    
    while(queue.length){
        const node = queue.shift();
        levelNodes--;
        
        if(node.left)
            queue.push(node.left);
        if(node.right)
            queue.push(node.right);
        
        levelMax = Math.max(levelMax, node.val);

        if(levelNodes == 0){
            levelNodes = queue.length;
            result.push(levelMax);
            levelMax = -Infinity;
        }
    }

    return result;
};