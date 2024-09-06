/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    if(head == null) return head;
    
    nums = new Set(nums);

    let current = head;
    let newHead = new ListNode();
    let prev = newHead;
    while(current.next){
        
        const node = current;
        current = current.next;
        node.next = null;
        
        if(!nums.has(node.val)) {
           prev.next = node;
           prev = prev.next;
        }
    }
    
    if(!nums.has(current.val)) prev.next = current;
    return newHead.next;
};