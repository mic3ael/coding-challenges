class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }
  setHead(head = null) {
    this.head = head;
  }
  setTail(tail = null) {
    this.tail = tail;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
}

class MinMaxStack {
  constructor() {
    this.elements = new LinkedList();
    this.max = { val: null, appearances: 0 };
    this.min = { val: null, appearances: 0 };
  }

  peek() {
    return this.elements.getTail().value;
  }

  pop() {
    const tailNode = this.elements.getTail();
    if (!tailNode) return;
    if (tailNode === this.elements.getHead()) {
      this.elements.setHead();
      this.elements.setTail();
      return tailNode.value;
    }
    this.elements.setTail(tailNode.prev);
    this.elements.getTail().next = null;

    if (this.max.val === tailNode.value && this.max.appearances > 1)
      this.max.appearances -= 1;
    else this.max = this.#calc(this.#calcMax);

    if (this.min.val === tailNode.value && this.min.appearances > 1)
      this.min.appearances -= 1;
    else this.min = this.#calc(this.#calcMin);

    return tailNode.value;
  }

  #calcMax(currentMax, newMax) {
    if (currentMax > newMax) return -1;
    if (currentMax === newMax) return 0;
    return 1;
  }

  #calcMin(currentMin, newMin) {
    if (currentMin < newMin) return -1;
    if (currentMin === newMin) return 0;
    return 1;
  }

  #calc(action) {
    const headNode = this.elements.getHead();
    if (!headNode) return;
    let appearances = 0;
    let currentVal = headNode.value;
    let current = headNode;

    while (current) {
      const result = action(currentVal, current.value);
      if (result === 0) {
        appearances += 1;
      } else if (result === 1) {
        currentVal = current.value;
        appearances = 1;
      }

      current = current.next;
    }

    return { appearances, val: currentVal };
  }

  push(number) {
    if (!this.elements.getHead()) {
      const newNode = new Node(number);
      this.elements.setHead(newNode);
      this.elements.setTail(newNode);
      this.max = { val: number, appearances: 1 };
      this.min = { val: number, appearances: 1 };
    } else {
      const tailNode = this.elements.getTail();
      const newNode = new Node(number, null, tailNode);
      tailNode.next = newNode;
      this.elements.setTail(newNode);
      const newMax = Math.max(this.max.val, number);
      const newMin = Math.min(this.min.val, number);

      if (this.max.val === newMax) this.max.appearances += 1;
      else this.max = { val: newMax, appearances: 1 };

      if (this.min.val === newMin) this.min.appearances += 1;
      else this.min = { val: newMin, appearances: 1 };
    }
  }

  getMin() {
    return this.min.val;
  }

  getMax() {
    return this.max.val;
  }
}

const stack = new MinMaxStack();

stack.push(5);
console.log('min: ', stack.getMin());
console.log('max: ', stack.getMax());
console.log('peek: ', stack.peek());
stack.push(7);
console.log('min: ', stack.getMin());
console.log('max: ', stack.getMax());
console.log('peek: ', stack.peek());
stack.push(2);
console.log('min: ', stack.getMin());
console.log('max: ', stack.getMax());
console.log('peek: ', stack.peek());
stack.pop();
stack.pop();
console.log('min: ', stack.getMin());
console.log('max: ', stack.getMax());
console.log('peek: ', stack.peek());
