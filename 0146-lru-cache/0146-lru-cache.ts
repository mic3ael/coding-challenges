class Node {
    val: any;
    next: Node;
    prev: Node;

    constructor(val: any, next: Node = null, prev: Node = null){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    head: Node;
    tail: Node;
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(node: Node): Node {
        if(!this.head){
            this.head = node;
            this.tail = node;
            return this.head;
        } 

        if(node === this.head) return this.head;

        if(node.next == null && node.prev == null){
            const temp = this.head;
            this.head = node;
            this.head.next = temp;
            this.head.next.prev = this.head;
            return this.head;
        }

        if(node === this.tail) {
            this.tail = node.prev;
            this.tail.next = null;
            const temp = this.head;
            this.head = node;
            this.head.next = temp;
            temp.prev = this.head;
            return this.head;
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

        return this.head;
    }
    all(){
        let current = this.head;
        const result = [];
        while(current){
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
    remove(): Node {
        // empty list
        if(this.tail == null) return;
        // one element in the list
        if(this.tail.prev == null) {
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
    capacity: number;
    data: Map<number, any>;
    order: LinkedList;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.data = new Map();
        this.order = new LinkedList();
    }

    get(key: number): number | void {
        if(!this.data.has(key)) return -1;
        const node = this.data.get(key);
        this.order.add(node);
        console.log("get - node: ", node);
        // this.data.set(key, updatedNode);
        return node.val.value;
    }

    put(key: number, value: number): void {
        if(this.capacity <= this.data.size && !this.data.has(key)){
            const node = this.order.remove();
            this.data.delete(node.val.key);
        }

        if(!this.data.has(key)){
            const node = new Node({ key, value });
            const updatedNode = this.order.add(node);
            this.data.set(key, updatedNode);
            return;
        }
        const node = this.data.get(key);
        node.val.value = value;
        const updatedNode = this.order.add(node);
        this.data.set(key, updatedNode);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */