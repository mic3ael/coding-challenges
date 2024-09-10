/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    const stack = [];
    let current = head;
    while(current){
        stack.push(current);
        current = current.next;
    }
    let next = null;
    while(stack.length){
        const node = stack.pop();
        if(next && node.val < next.val) continue;
        node.next = next;
        next = node;
    }

    return next;
};