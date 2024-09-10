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
var insertGreatestCommonDivisors = function(head) {
    let current = head.next;
    let prev = head;

    while(current){
        let divider = Math.min(prev.val, current.val);
        while(divider >= 1){
            if(divider == 1 || (prev.val % divider == 0 && current.val % divider == 0)) {
                prev.next = new ListNode(divider, current);
                prev = current;
                break;
            }
            divider--;
        }
        
        current = current.next;
    }

    return head;
};