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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST2 = function(root, low, high) {
    if(root == null) return 0;
    
    let currentSum = 0;

    if(root.val >= low && root.val <= high){
        currentSum += root.val
    }

    return rangeSumBST2(root.left, low, high) + rangeSumBST2(root.right, low, high) + currentSum;
};

var rangeSumBST = function(root, low, high) {
    const stack = [root];
    let sum = 0;
    while(stack.length){
        const node = stack.pop();
        if(node && node.val >= low && node.val <= high)
            sum += node.val;
        
        if(node.left)
            stack.push(node.left);
        if(node.right)
            stack.push(node.right);
    }

    return sum;
}