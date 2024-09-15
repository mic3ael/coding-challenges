/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(root == null) return root;
    const queue = [root];
    let levelNodes = 1;
    let prev = null;
    while(queue.length){
        const node = queue.shift();
        levelNodes--;

        if(node.left)
            queue.push(node.left);
        if(node.right)
            queue.push(node.right);

        if(prev == null)
            prev = node;
        else {
            prev.next = node;
            prev = node;
        }

        if(levelNodes == 0){
            prev = null;
            levelNodes = queue.length;
        }
    }

    return root;
};