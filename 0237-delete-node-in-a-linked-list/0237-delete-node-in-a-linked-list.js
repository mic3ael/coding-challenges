/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let current = node;
    let prev = current;
    while(current.next){
        current.val = current.next.val;
        prev = current;
        current = current.next;
    }

    prev.next = null;
};