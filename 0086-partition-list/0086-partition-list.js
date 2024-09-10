/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const values = [];
    let current = head;
    
    while(current) {
        values.push(current.val);
        current = current.next;
    }
    
    current = head;
    let i = 0;
    while(i < values.length){
        while(values[i] >= x){
            i++;
        }
        if(i > values.length - 1) break;
        current.val = values[i];
        current = current.next;
        i++;
    }
    
    i = 0;

    while(i < values.length){
        
        while(values[i] < x){
            i++;
        }
        
        if(current == null) break;
        current.val = values[i];
        current = current.next;
        i++;
    }

    return head;
};