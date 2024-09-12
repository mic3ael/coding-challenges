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
var sortList = function(head) {
    const values = [];
    let current = head;
    while(current){
        values.push(Number(current.val));
        current = current.next;
    }

    values.sort((a,b) => a - b);
    let i = 0;
    current = head;
    while(current){
        current.val = values[i];
        i++;
        current = current.next;
    }

    return head;
};