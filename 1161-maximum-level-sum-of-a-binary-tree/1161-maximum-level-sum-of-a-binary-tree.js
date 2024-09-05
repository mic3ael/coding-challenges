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
var maxLevelSum = function(root) {
    const queue = [root];
    let levelNodes = 1;
    let level = 1;
    const result = { maxSum: Number.MIN_SAFE_INTEGER, level: 0};
    let currentSum = 0;

    while(queue.length){
        const node = queue.shift();
        levelNodes--;
        currentSum += node.val;
        if(node.left)
            queue.push(node.left);
        if(node.right)
            queue.push(node.right);

        if(levelNodes == 0) {
           if(result.maxSum < currentSum){
                result.maxSum = currentSum;
                result.level = level;
           }

           level++;
           currentSum = 0;
           levelNodes = queue.length;
        }
    }

    return result.level;
};