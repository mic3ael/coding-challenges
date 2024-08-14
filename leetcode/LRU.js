class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (node === this.head) return;

    if (node.next == null && node.prev == null) {
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
      this.head.next.prev = this.head;
      return;
    }

    if (node === this.tail) {
      this.tail = node.prev;
      this.tail.next = null;
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
      temp.prev = this.head;
      return;
    }

    const prev = node.prev;
    prev.next = node.next;
    node.next.prev = prev;
    node.next = null;
    node.prev = null;
    const temp = this.head;
    this.head = node;
    this.head.next = temp;
    this.head.next.prev = this.head;
  }
  all() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
  remove() {
    // empty list
    if (this.tail == null) return;
    // one element in the list
    if (this.tail.prev == null) {
      const temp = this.tail;
      this.tail = null;
      this.head = null;
      return temp;
    }
    // more than one element in the list
    const temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return temp;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.data = new Map();
    this.order = new LinkedList();
  }

  get(key) {
    if (!this.data.has(key)) return -1;
    const node = this.data.get(key);
    this.order.add(node);
    return node.val.value;
  }

  put(key, value) {
    if (this.capacity <= this.data.size && !this.data.has(key)) {
      const node = this.order.remove();
      this.data.delete(node.val.key);
    }

    if (!this.data.has(key)) {
      const node = new Node({ key, value });
      this.order.add(node);
      this.data.set(key, node);
      return;
    }
    const node = this.data.get(key);
    node.val.value = value;
    this.order.add(node);
    this.data.set(key, node);
  }
}

const lru = new LRUCache(2);
console.log(lru.put(1, 1));
console.log(lru.put(2, 2));
console.log(lru.get(1));
console.log(lru.put(3, 3));
console.log(lru.get(2));
console.log(lru.put(4, 4));
console.log(lru.get(1));
console.log(lru.get(3));
console.log(lru.get(4));
