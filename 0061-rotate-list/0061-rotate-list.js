/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let size = 0;
    let current = head;
    while(current){
        size++;
        current = current.next;
    }

    if(size < 2) return head;
    k = k % size;
    
    // rotate k times
    while(k > 0) {
        let current = head;
        let i = size;
        while(i > 2){
            i--;
            current = current.next;
        }

        let temp = head;
        head = current.next;
        head.next = temp;
        current.next = null;
        k--;
    }

    return head;
};