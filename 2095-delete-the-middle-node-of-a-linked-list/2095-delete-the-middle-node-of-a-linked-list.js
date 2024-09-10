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
var deleteMiddle = function(head) {
    let size = 0;
    let current = head;

    while(current) {
        size++;
        current = current.next;
    }

    const newHead = new ListNode(null, head);
    current = newHead;
    let idxToRemove = Math.floor(size/2) + 1;
    let prev = current;
    
    while(current) {
        if(idxToRemove == 0)
            prev.next = current.next;
        idxToRemove--;
        prev = current;
        current = current.next;
    }

    return newHead.next;
};