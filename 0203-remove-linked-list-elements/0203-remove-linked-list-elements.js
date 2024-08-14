/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    const newHead = new ListNode(undefined, head);
    let current = newHead;

    while(current){
        while(current.next != null && current.next.val == val){
            current.next = current.next.next;
        }
        
        current = current.next;
    }

    return newHead.next;
};