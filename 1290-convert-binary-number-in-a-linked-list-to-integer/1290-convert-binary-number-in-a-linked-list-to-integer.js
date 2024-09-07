/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let current = head;
    let count = 0;
    while(current){
        count++;
        current = current.next;
    }
    
    current = head;
    let result = 0;
    let pow = count - 1;
    while(current){
        const mul = current.val;
        result += Math.pow(2, pow) * mul;
        pow--;
        current = current.next;
    }

    return result;
};