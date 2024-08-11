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
var mergeNodes = function(head) {
    let current = head;
    let prev = null;
    let newHead = null;
    let currentHead = null;

    while(current){
        if(current.val != 0){
            if(currentHead == null)
                currentHead = current;
            else
                currentHead.val += current.val; 
        } else {
            if(newHead == null)
                newHead = currentHead;
            if(prev != null)
                prev.next = currentHead;
            prev = currentHead;
            currentHead = null;
        }

        current = current.next;
    }

    prev.next = currentHead;

    return newHead;
};