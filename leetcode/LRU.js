class Node {
  val;
  next;
  prev;

  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  head;
  tail;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const temp = this.head;
      this.head = node;

      if (node.next == null && node.prev == null) {
        this.head.next = temp;
        temp.prev = this.head;
      } else {
        const prev = node.prev;
        prev.next = node.next;

        if (node === this.tail) {
          this.tail = prev;
          this.tail.next = null;
        } else if (node.next && node.next.prev) {
          node.next.prev = prev;
        }
      }
    }
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
  capacity;
  data;
  order;

  constructor(capacity) {
    this.capacity = capacity;
    this.data = new Map();
    this.order = new LinkedList();
  }

  get(key) {
    if (!this.data.has(key)) return;
    const node = this.data.get(key);
    this.order.add(node);
    return node.val.value;
  }

  put(key, value) {
    if (this.capacity < this.data.size) {
      const node = this.order.remove();
      this.data.delete(node.val.key);
    }

    if (!this.data.has(key)) {
      const node = new Node({ key, value });
      this.data.set(key, node);
      this.order.add(node);
      return;
    }

    const node = this.data.get(key);
    node.val.value = value;
    this.order.add(node);
  }
}

const lru = new LRUCache(2);

lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1));
lru.put(3, 3);
console.log(lru.get(2));
lru.put(4, 4);
console.log(lru.get(1));
console.log(lru.get(3));
console.log(lru.get(4));
