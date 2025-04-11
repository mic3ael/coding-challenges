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
var swapNodes = function (head, k) {
    let size = 0;
    let current = head;
    while (current) {
        size++;
        current = current.next;
    }

    if (size === 1) return head;

    let leftIdx = 1;
    current = head;
    while (leftIdx !== k) {
        current = current.next;
        leftIdx++;
    }
    
    const leftNode = current;
    current = head;
    let rightIdx = size;
    while(rightIdx !== k){
        current = current.next;
        rightIdx--;
    }
    const rightNode = current;
    const temp = leftNode.val;
    leftNode.val = rightNode.val;
    rightNode.val = temp;
    return head;
};