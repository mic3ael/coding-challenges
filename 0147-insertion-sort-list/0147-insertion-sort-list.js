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
var insertionSortList = function(head) {
    
    const stack = [];    
    const tempStack = [];
    let current = head;
    
    while(current){
        while(stack.length > 0 && stack[stack.length - 1] > current.val)
            tempStack.push(stack.pop());
        stack.push(current.val);

        while(tempStack.length > 0)
            stack.push(tempStack.pop());

        current = current.next;
    }
    current = head;
    for(let i = 0; i < stack.length; i++){
        current.val = stack[i];
        current = current.next;
    }

    return head;
};