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
var deepestLeavesSum = function(root) {
    const queue = [root];
    let levelNodes = 1;
    let levelSum = 0;
    let deepestLevelSum = 0;
    while(queue.length){
        const node = queue.shift();
        levelNodes--;
        levelSum += node.val;

        if(node.left)
            queue.push(node.left);
        if(node.right)
            queue.push(node.right);

        if(levelNodes == 0){
            levelNodes = queue.length;
            deepestLevelSum = levelSum;
            levelSum = 0;
        }
    }

    return deepestLevelSum;
};