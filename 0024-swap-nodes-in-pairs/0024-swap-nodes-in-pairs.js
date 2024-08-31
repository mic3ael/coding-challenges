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
var swapPairs = function(head) {
    if(head == null || head.next == null) return head;
    let newHead = null
    let current = head;
    let prev = null;

    while(current && current.next){
        const second = current.next;
        const first = current;
        if(second)
            current = second.next;
        else
            current = null;

        if(prev == null){
            second.next = null;
            newHead = second;
            first.next = current;
            newHead.next = first;
            prev = newHead.next;
            continue;
        }
    
        prev.next = second;
        first.next = current;
        prev.next.next = first;
        prev = prev.next.next;
    }

    return newHead;
};