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
    const stack = [];
    let current = head;
    
    while(current){
        stack.push(current.val);
        current = current.next;
    }

    let result = 0;
    let pow = 0;
    while(stack.length){
        const mul = stack.pop();
        result += Math.pow(2, pow) * mul;
        pow++;
    }

    return result;
};