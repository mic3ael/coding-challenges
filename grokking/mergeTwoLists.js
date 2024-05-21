// class Node {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
  // time: O(n+m), space: O(1) - It's a pointer to an already existing object in the memory, so no additional space is required.
  mergeTwoLists(l1, l2) {
    let current1 = l1;
    let current2 = l2;
    let head = new Node();
    let mergedList = head;

    while (current1 && current2) {
      if (current1.val >= current2.val) {
        mergedList.next = new Node(current2.val);
        current2 = current2.next;
      } else {
        mergedList.next = new Node(current1.val);
        current1 = current1.next;
      }
      mergedList = mergedList.next;
    }

    while (current1) {
      mergedList.next = new Node(current1.val);
      mergedList = mergedList.next;
      current1 = current1.next;
    }

    while (current2) {
      mergedList.next = new Node(current2.val);
      mergedList = mergedList.next;
      current2 = current2.next;
    }

    return head.next;
  }
}
