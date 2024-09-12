class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class MyLinkedList {
    #size;
    constructor() {
        this.head = null;
        this.tail = null;
        this.#size = 0;
    }

    get(index) {
        if(this.#isEmpty()) return -1;
        if(this.#size <= index) return -1;
        let current = this.head;
        while(index > 0) {
            index--;
            current = current.next;
        }

        return current.data;
    }

    addAtHead(val) {
        const node = new Node(val);
        this.#size++;
        if(this.#isEmpty()) {
            this.head = node;
            this.tail = this.head;
            return;
        }

        const temp = this.head;
        this.head = node;
        this.head.next = temp;
    }

    addAtTail(val) {
        const node = new Node(val);
        this.#size++;
        if(this.#isEmpty()) {
            this.head = node;
            this.tail = this.head;
            return;
        }

        this.tail.next = node;
        this.tail = this.tail.next;
    }

    addAtIndex(index, val) {
        const node = new Node(val);
        if(index == 0 && this.#isEmpty()){
            this.head = node;
            this.tail = this.head;
            this.#size++;
            return;
        }
        
        if(this.#size == index) {
            this.tail.next = node;
            this.tail = this.tail.next;
            this.#size++;
            return;
        }

        if(this.#size < index + 1) return;
        
        if(index == 0) {
            const temp = this.head;
            this.head = node;
            this.head.next = temp;
            this.#size++;
            return;
        }

        let current = this.head;
        while(index > 1){
            index--;
            current = current.next;
        }
        const temp = current.next;
        node.next = temp;
        current.next = node;
        this.#size++;
    }

    deleteAtIndex(index) {
        if(this.#isEmpty() || index >= this.#size) return;
        
        this.#size--;
        if(index == 0){
            const node = this.head;
            this.head = node.next;
            node.next = null;
            if (this.head == null) this.tail = null;
            return;
        }

        let current = this.head;
        while(index > 1){
            index--;
            current = current.next;
        }

        const node = current.next;
        current.next = node.next;
        if(current.next == null)
            this.tail = current;
        node.next = null;
    }
    #isEmpty(){
        return this.head == null;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */