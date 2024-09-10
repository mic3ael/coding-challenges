/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let current = list1;

    while(current){
        a--;
        b--;
        if(a == 0){
            let next = current;
            while(next && b + 2 > 0){
                next = next.next;
                b--;
            }
            current.next = list2;
            while(current.next){
                current = current.next;
            }
            current.next = next;
            break;
        }
        current = current.next;
    }

    return list1;
};