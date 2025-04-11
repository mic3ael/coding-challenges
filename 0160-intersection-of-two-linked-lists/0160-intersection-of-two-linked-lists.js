/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const getSize = (head) => {
  let size = 0;
  let current = head;
  while(current){
    size++;
    current = current.next;
  }
  return size;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let sizeA = getSize(headA);
    let sizeB = getSize(headB);

    let currentA = headA;
    let currentB = headB;
    while(sizeA > sizeB) {
        currentA = currentA.next; 
        sizeA--;
    }
    while(sizeB > sizeA) {
        currentB = currentB.next;
        sizeB--;
    }

    while(currentA && currentB){
        if(currentA === currentB) return currentA;
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null;
};

