class Node {
    val;
    next;
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class LinkedListQueue {
    head;
    tail;
    constructor(){}
    push(val){
        const node = new Node(val);
        if(this.head == null){
            this.head = node;
            this.tail = this.head;
            return;
        }

        this.tail.next = node;
        this.tail = this.tail.next;
    }
    pop() {
        if(!this.head) return this.head;
        const result = this.head;
        if(this.head == this.tail) {
            this.head = null;
            this.tail = this.head;            
            return result.val;
        }

        this.head = this.head.next;
        return result.val;
    }
    peek() {
        return this.head.val;
    }
    empty() { return !this.head; }
}


var MyQueue = function() {
    this.list = new LinkedListQueue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.list.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.list.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.list.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.list.empty();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */