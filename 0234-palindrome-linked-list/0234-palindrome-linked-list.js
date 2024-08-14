/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let current = head;
    let reversedList = null;

    while(current){
        const temp = reversedList;
        reversedList = new ListNode(current.val, temp); 
        current = current.next;
    }

    current = head;
    while(current){
        if(current.val != reversedList.val) return false;
        current = current.next;
        reversedList = reversedList.next;
    }
    return true;
};