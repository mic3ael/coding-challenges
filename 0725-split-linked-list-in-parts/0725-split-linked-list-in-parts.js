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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let size = 0;
    let current = head;
    
    while(current){
        size++;
        current = current.next;
    }


    let splitSize = Math.floor(size / k);
    let rest = size % k;
    let bulkSize = splitSize + (rest > 0 ? 1 : 0);
    const result = [];
    current = head;
    let bulkHead = current;
    
    while(current){
        bulkSize--;
        if(bulkSize == 0){
            rest--;
            const node = current;
            current = current.next;
            node.next = null;
            result.push(bulkHead);
            bulkSize = splitSize + (rest > 0 ? 1 : 0);
            bulkHead = current;
            continue;
        }

        current = current.next;
    }

    while(result.length < k) result.push(null);

    return result;
};