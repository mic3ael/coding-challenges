class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  // time: O(n), space: O(n)
  removeNodes(head) {
    let current = head;
    const stack = [];
    while (current) {
      while (stack.length && current.val > stack[stack.length - 1].val) {
        stack.pop();
        if (stack.length) stack[stack.length - 1].next = current;
      }

      stack.push(current);
      current = current.next;
    }
    return stack[0];
  }
  print(head) {
    let node = head;
    let output = '';
    while (node) {
      output += node.val;
      if (node.next) {
        output += ' -> ';
      }
      node = node.next;
    }
    console.log(output);
  }
}

// Testing the solution
let solution = new Solution();

// Creating the linked list 5 -> 3 -> 7 -> 4 -> 2 -> 1
let head1 = new Node(5);
head1.next = new Node(3);
head1.next.next = new Node(7);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(2);
head1.next.next.next.next.next = new Node(1);
// head1 = solution.removeNodes(head1);
// solution.print(head1);

let head2 = new Node(5);
head2.next = new Node(4);
head2.next.next = new Node(5);
head2.next.next.next = new Node(4);
head2.next.next.next.next = new Node(5);
head2 = solution.removeNodes(head2);
solution.print(head2);
